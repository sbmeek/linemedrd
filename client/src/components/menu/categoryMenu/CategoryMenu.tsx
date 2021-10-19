import SideContent, { Category } from './CategoryMenu.styles';
import { Fragment } from 'react';
import routesMenu, { Categories, Modules } from 'constants/routesMenu';

const CategoryMenu = <
	TProps extends { name: Modules; categories: Categories }
>({
	name,
	categories
}: TProps) => {
	return (
		<Fragment>
			<SideContent>
				<ul>
					<Category>{name}</Category>
					{Object.entries(categories).map(([, { title, path }], index) => (
						<li key={path + index}>{title}</li>
					))}
				</ul>
			</SideContent>
		</Fragment>
	);
};

export default CategoryMenu;
