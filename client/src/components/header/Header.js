import { useLocation } from 'react-router-dom';
import SideBarTop from '@/components/menu/sideBarTop/SideBarTop';
import { useState } from 'react';
import Sidebar from '@/components/menu/sideBar/SideBar';
import { ContainerTop, ContentHeader } from './Header.styles';

const dontShowIn = ['/HomeWithoutHeader'];

const Header = () => {
	const location = useLocation();
	if (dontShowIn.indexOf(location.pathname) !== -1) return null;
	const direction = location.pathname;
	const [showSideBar, setShowSideBar] = useState(false);

	return (
		<ContentHeader>
			<ContainerTop {...{ location: direction }}>
				<SideBarTop show={showSideBar} setShow={setShowSideBar} />
			</ContainerTop>
			{showSideBar ? (
				<Sidebar show={showSideBar} setShow={setShowSideBar} />
			) : null}
		</ContentHeader>
	);
};

export default Header;
