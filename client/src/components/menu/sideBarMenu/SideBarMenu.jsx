import routesMenu from 'constants/routesMenu';
import CategoryMenu from '../categoryMenu/CategoryMenu';
import SideMain from './SideBarMenu.styles';

const SideBarMenu = () => {
	return (
		<SideMain role="menu">
			{Object.entries(routesMenu).map(([name, category]) => (
				<CategoryMenu
					key={name}
					categoryRoutes={category}
					nameCategory={name}
				/>
			))}
		</SideMain>
	);
};

export default SideBarMenu;
