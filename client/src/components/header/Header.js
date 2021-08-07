// import { useLocation } from 'react-router-dom';
import { appName } from '@/constants';
import { FiMenu } from 'react-icons/fi';
import {
	ContainerLogo,
	ContainerTop,
	ContentHeader,
	ContentIconMenu,
	Rombo
} from './Header.styles';

import Sidebar from '../menu/sideBar/SideBar';

// const dontShowIn = ['/HomeWithoutHeader'];

const Header = () => {
	// const location = useLocation();
	// if (dontShowIn.indexOf(location.pathname) !== -1) return null;

	return (
		<ContentHeader>
			<ContainerTop>
				<ContainerLogo>
					<Rombo></Rombo>
					<h1>{appName}</h1>
				</ContainerLogo>
				<ContentIconMenu>
					{/* FiMinus */}
					<FiMenu size="1.6rem" color="white" />
				</ContentIconMenu>
			</ContainerTop>
			<div>
				<Sidebar />
			</div>
		</ContentHeader>
	);
};

export default Header;
