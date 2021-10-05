import { useLocation } from 'react-router-dom';
import SideBarTop from 'components/menu/sideBarTop/SideBarTop';
import { Fragment, useState } from 'react';
import Sidebar from 'components/menu/sideBar/SideBar';
import { ContainerTop, ContentHeader } from './Header.styles';

const dontShowIn = ['/HomeWithoutHeader'];

const Header = () => {
	const location = useLocation();
	const [showSideBar, setShowSideBar] = useState(false);

	if (dontShowIn.indexOf(location.pathname) !== -1) return null;
	const direction = location.pathname;

	return (
		<Fragment>
			<ContentHeader>
				<ContainerTop {...{ location: direction }}>
					<SideBarTop
						color={direction}
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
