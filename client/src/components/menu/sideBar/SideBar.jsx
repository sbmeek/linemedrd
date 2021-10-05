import { ContentNav } from './SideBar.styles';
import SideBarMenu from '../sideBarMenu/SideBarMenu';
// import SideTopDr from '../sideTopDr/SideTopDr';
import SideTopUser from '../sideTopUser/SideTopUser';

const Sidebar = ({ show, setShow }) => {
	const hideMenu = () => {
		setShow(!show);
	};

	return (
		<ContentNav {...{ show }}>
			<SideTopUser hideMenu={hideMenu} />
			{/* <SideTopDr hideMenu={hideMenu} /> */}
			<SideBarMenu />
		</ContentNav>
	);
};

export default Sidebar;
