import SideBarMenu from '../sideBarMenu/SideBarMenu';
import {
	Link,
	ContentTop,
	ContentNav,
	SideBarTop,
	SideBarMain
} from './SideBar.styles';

const Sidebar = () => {
	return (
		<ContentNav>
			<SideBarTop>
				<ContentTop>
					<Link to="./Login">Iniciar sesión</Link>
					<Link to="./Signup">Regístrate</Link>
				</ContentTop>
			</SideBarTop>
			<SideBarMain>
				<SideBarMenu />
			</SideBarMain>
		</ContentNav>
	);
};

export default Sidebar;
