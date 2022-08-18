import { Fragment, PropsWithChildren } from 'react';
import { ContainerNavTop, ContentNavTop, WrapperNavTop } from './styles';

const NavTop = <T extends PropsWithChildren<{}>>({ children }: T) => {
	return (
		<Fragment>
			<ContainerNavTop>
				<WrapperNavTop>
					<ContentNavTop>{children}</ContentNavTop>
				</WrapperNavTop>
			</ContainerNavTop>
		</Fragment>
	);
};

export default NavTop;
