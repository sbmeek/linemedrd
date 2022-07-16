import { RouteComponentProps, withRouter } from 'react-router-dom';
import SideBarTop from 'components/menu/side-bar-top';
import { Fragment, useState } from 'react';
import Sidebar from 'components/menu/side-bar';
import { ContainerTop, ContentHeader } from './styles';

const Header = <T extends RouteComponentProps>({
	location: { pathname }
}: T): JSX.Element => {
	const [showSideBar, setShowSideBar] = useState<boolean>(false);

	return (
		<Fragment>
			<ContentHeader>
				<ContainerTop location={pathname}>
					<SideBarTop
						pathname={pathname}
						show={showSideBar}
						setShow={setShowSideBar}
					/>
				</ContainerTop>
			</ContentHeader>
			<Sidebar show={showSideBar} setShow={setShowSideBar} />
		</Fragment>
	);
};

export default withRouter(Header);
