import { ContentNav } from './Sidebar.styles';
import SideBarMenu from '../sideBarMenu/SidebarMenu.component';
// import SideTopDr from '../sideTopDr/SideTopDr';
import SideTopUser from '../sideTopUser/SideTopUser';

interface IPropsProperty {
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = <TProps extends IPropsProperty>({ show, setShow }: TProps) => {
	const hideMenu: () => void = () => {
		setShow(prev => !prev);
	};

	// TODO: David: El sideTopDr es para cuando esta logeado el user
	return (
		<ContentNav show={show}>
			<SideTopUser hideMenu={hideMenu} />
			{/* <SideTopDr hideMenu={hideMenu} /> */}
			<SideBarMenu />
		</ContentNav>
	);
};

export default Sidebar;
