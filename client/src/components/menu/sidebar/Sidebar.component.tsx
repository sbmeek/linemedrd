import { ContentNav } from './Sidebar.styles';
import SideBarMenu from '../sideBarMenu/SidebarMenu.component';
import SideTopDr from '../sideTopDr/SideTopDr';
import SideTopUser from '../sideTopUser/SideTopUser';
import useAuth from 'context/auth/authContext';

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
				<SideTopDr hideMenu={hideMenu} />
			) : (
				<SideTopUser hideMenu={hideMenu} />
			)}

			<SideBarMenu />
		</ContentNav>
	);
};

export default Sidebar;
