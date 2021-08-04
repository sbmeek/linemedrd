import { useLocation } from 'react-router-dom';
import { appName } from '@/constants';
import MenuIcon from '@/assets/icon/MenuIcon';
import {
	ContainerLogo,
	ContainerTop,
	ContentMenu,
	Rombo
} from './Header.styles';

const dontShowIn = ['/HomeWithoutHeader'];

const Header = () => {
	const location = useLocation();
	if (dontShowIn.indexOf(location.pathname) !== -1) return null;
	return (
		<ContainerTop>
			<ContainerLogo>
				<Rombo></Rombo>
				<h1>{appName}</h1>
			</ContainerLogo>
			<ContentMenu
				onClick={() => {
					console.log('menu');
				}}
			>
				<MenuIcon size="20" color="white" />
			</ContentMenu>
		</ContainerTop>
	);
};

export default Header;
