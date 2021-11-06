import { useLocation } from 'react-router-dom';
import SideBarTop from 'components/menu/sideBarTop/SidebarTop.component';
import { Fragment, useState } from 'react';
import Sidebar from 'components/menu/sideBar/Sidebar.component';
import { ContainerTop, ContentHeader } from './Header.styles';

const dontShowIn = ['/HomeWithoutHeader'];

const Header = () => {
	const location = useLocation();
	const [showSideBar, setShowSideBar] = useState(false);

	if (dontShowIn.indexOf(location.pathname) !== -1) return null;

	return (
		<Fragment>
			<ContentHeader>
				<ContainerTop location={location.pathname}>
					<SideBarTop
						pathname={location.pathname}
						show={showSideBar}
						setShow={setShowSideBar}
					/>
				</ContainerTop>
			</ContentHeader>
			<Sidebar show={showSideBar} setShow={setShowSideBar} />
		</Fragment>
	);
};

export default Header;
