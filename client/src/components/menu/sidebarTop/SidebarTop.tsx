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

const SidebarTop = <
	TProps extends {
		pathname: string;
		show: boolean;
		setShow: React.Dispatch<React.SetStateAction<boolean>>;
	}
>({
	pathname,
	show,
	setShow
}: TProps) => {
	const showMenu = () => {
		document.body.style.overflow = show ? 'auto' : 'hidden';
		setShow(!show);
	};

	return (
		<Fragment>
			<ContainerLogo onClick={showMenu}>
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
