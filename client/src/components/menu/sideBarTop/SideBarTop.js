import { Fragment } from 'react';
import { appName } from '@/constants';
import routes from '@/constants/routes';
// import { FiMinus } from 'react-icons/fi';
import Menu from '@/assets/icon/menu_icon/Menu';

import {
	ContainerLogo,
	ContentIconMenu,
	Rombo,
	LinkLogo
} from '@/components/menu/sideBarTop/SideBarTop.styles';

const SideBarTop = ({ color, show, setShow }) => {
	const showMenu = () => {
		// document.querySelector('body').style.overflow = show ? 'auto' : 'hidden';
		setShow(!show);
	};

	return (
		<Fragment>
			<ContainerLogo onClick={show ? showMenu : null}>
				<Rombo {...{ color }}></Rombo>
				<LinkLogo {...{ color }} to={routes.home.path}>
					<h1>{appName}</h1>
				</LinkLogo>
			</ContainerLogo>
			<ContentIconMenu {...{ color }} onClick={showMenu}>
				{show ? (
					<Menu color={color} showMenu={show} />
				) : (
					// <FiMinus className="icon" title="menu icon one line" />
					<Menu color={color} showMenu={show} />
					// <FiMenu className="icon" title="menu three line" />
				)}
			</ContentIconMenu>
		</Fragment>
	);
};

export default SideBarTop;
