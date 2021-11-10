import { Fragment } from 'react';
import { appName } from 'constants/index';
import routes from 'constants/routes';
import MenuIcon from 'assets/icon/menu_icon/MenuIcon';

import {
	ContainerLogo,
	ContentIconMenu,
	Diamond,
	LinkLogo
} from './SidebarTop.styles';

interface IPropsProperty {
	pathname: string;
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarTop = <T extends IPropsProperty>({
	pathname,
	show,
	setShow
}: T) => {
	const showMenu: () => void = () => {
		document.body.style.overflow = show ? 'auto' : 'hidden';
		setShow(prev => !prev);
	};

	return (
		<Fragment>
			<ContainerLogo>
				<Diamond pathname={pathname}></Diamond>
				<LinkLogo pathname={pathname} to={routes.home.path}>
					<h1>{appName}</h1>
				</LinkLogo>
			</ContainerLogo>
			<ContentIconMenu pathname={pathname} onClick={showMenu}>
				<MenuIcon pathname={pathname} showMenu={show} />
			</ContentIconMenu>
		</Fragment>
	);
};

export default SidebarTop;
