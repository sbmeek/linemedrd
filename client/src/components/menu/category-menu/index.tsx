import SideContent, { Category } from './styles';
import { Fragment } from 'react';
import { Categories, Modules } from 'constants/routes-menu';

type IProps = { name: Modules; categories: Categories };

const CategoryMenu = <T extends IProps>({ name, categories }: T) => {
	return (
		<Fragment>
			<SideContent>
				<ul>
					<Category>{name}</Category>
					{Object.entries(categories).map(([key, values], index) => (
						<li key={index}>{values.title}</li>
					))}
				</ul>
			</SideContent>
		</Fragment>
	);
};

export default CategoryMenu;
