import routesMenu, { Modules } from 'constants/routes-menu';
import CategoryMenu from '../category-menu';
import SideMain from './styles';

const SidebarMenu = () => {
	return (
		<SideMain>
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
