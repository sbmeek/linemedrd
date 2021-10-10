import routesMenu, { Modules } from 'constants/routesMenu';
import CategoryMenu from '../categoryMenu/CategoryMenu';
import SideMain from './SidebarMenu.styles';

const SidebarMenu = () => {
	return (
		<SideMain role="menu">
			{Object.entries(routesMenu).map(([name, categories]) => (
				<CategoryMenu
					key={name}
					name={name as Modules}
					categories={categories}
				/>
			))}
		</SideMain>
	);
};

export default SidebarMenu;
