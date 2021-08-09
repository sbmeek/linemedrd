import { Fragment } from 'react';
import { appName } from '@/constants';
import { FiMenu, FiMinus } from 'react-icons/fi';

import {
	ContainerLogo,
	ContentIconMenu,
	Rombo
} from '@/components/menu/sideBarTop/SideBarTop.styles';

const SideBarTop = ({ show, setShow }) => {
	const showMenu = () => {
		// document.querySelector('body').style.overflow = show ? 'auto' : 'hidden';
		setShow(!show);
	};

	return (
		<Fragment>
			<ContainerLogo>
				<Rombo></Rombo>
				<h1>{appName}</h1>
			</ContainerLogo>
			<ContentIconMenu onClick={showMenu}>
				{show ? (
					<FiMinus title="menu icon one line" />
				) : (
					<FiMenu title="menu three line" />
				)}
			</ContentIconMenu>
		</Fragment>
	);
};

export default SideBarTop;
