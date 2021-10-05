import SideContent, { Category } from './CategoryMenu.styles';
import { Fragment } from 'react';

const CategoryMenu = ({ categoryRoutes, nameCategory }) => {
	return (
		<Fragment>
			<SideContent>
				<ul>
					<Category>{nameCategory}</Category>
					{Object.entries(categoryRoutes).map(([nameRoute, route]) => (
						<li key={nameRoute}>{route.name}</li>
					))}
				</ul>
			</SideContent>
		</Fragment>
	);
};

export default CategoryMenu;
