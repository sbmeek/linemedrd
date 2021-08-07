import { useLocation } from 'react-router-dom';
import { appName } from '@/constants';
import { FiMenu } from 'react-icons/fi';
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
				{/* <TiThMenu size="1.6rem" color="white" /> */}
				{/* <BsList size="1.6rem" color="white" />
				<BsDash size="1.6rem" color="white" /> */}
				<FiMenu size="1.6rem" color="white" />
				{/* <FiMinus size="1.6rem" color="white" /> */}
			</ContentMenu>
		</ContainerTop>
	);
};

export default Header;
