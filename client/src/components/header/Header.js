// import { useLocation } from 'react-router-dom';
import SideBarTop from '@/components/menu/sideBarTop/SideBarTop';
import { useState } from 'react';
import Sidebar from '@/components/menu/sideBar/SideBar';
import { ContainerTop, ContentHeader } from './Header.styles';

// const dontShowIn = ['/HomeWithoutHeader'];

const Header = () => {
	// const location = useLocation();
	// if (dontShowIn.indexOf(location.pathname) !== -1) return null;
	const [showSideBar, setShowSideBar] = useState(false);

	return (
		<ContentHeader>
			<div>
				<ContainerTop>
					<SideBarTop show={showSideBar} setShow={setShowSideBar} />
				</ContainerTop>
			</div>
			{showSideBar ? <Sidebar show={showSideBar} /> : null}
		</ContentHeader>
	);
};

export default Header;
