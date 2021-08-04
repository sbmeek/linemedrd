import { appName } from '@/constants';
import MenuIcon from '@/assets/icon/MenuIcon';
import {
	ContainerLogo,
	ContainerTop,
	ContentMenu,
	Rombo
} from './Header.styles';

const Header = () => {
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
