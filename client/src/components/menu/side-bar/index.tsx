import useAuth from 'context/auth';
import { ContentNav } from './styles';
import SideBarMenu from '../side-bar-menu';
import SideTopDoctor from '../side-top-doctor';
import SideTopUser from '../side-top-user';

interface IPropsProperty {
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = <TProps extends IPropsProperty>({ show, setShow }: TProps) => {
	const hideMenu: () => void = () => {
		setShow(prev => !prev);
	};

	const { user } = useAuth();

	return (
		<ContentNav show={show}>
			{user.isAuthenticated ? (
				<SideTopDoctor hideMenu={hideMenu} />
			) : (
				<SideTopUser hideMenu={hideMenu} />
			)}

			<SideBarMenu />
		</ContentNav>
	);
};

export default Sidebar;
