import { ContentNav } from './Sidebar.styles';
import SideBarMenu from '../sidebarMenu/SidebarMenu';
// import SideTopDr from '../sideTopDr/SideTopDr';
import SideTopUser from '../sideTopUser/SideTopUser';

const Sidebar = <
	TProps extends {
		show: boolean;
		setShow: React.Dispatch<React.SetStateAction<boolean>>;
	}
>({
	show,
	setShow
}: TProps) => {
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
