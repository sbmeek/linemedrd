import { Fragment } from 'react';
import { appName } from '@/constants';
import routes from '@/constants/routes';
import MenuIcon from '@/assets/icon/menu_icon/MenuIcon';

import {
	ContainerLogo,
	ContentIconMenu,
	Rombo,
	LinkLogo
} from '@/components/menu/sideBarTop/SideBarTop.styles';

const SideBarTop = ({ color, show, setShow }) => {
	const showMenu = () => {
		document.querySelector('body').style.overflow = show ? 'auto' : 'hidden';
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
			<ContentIconMenu onClick={showMenu}>
				<MenuIcon color={color} showMenu={show} />
			</ContentIconMenu>
		</Fragment>
	);
};

export default SideBarTop;
