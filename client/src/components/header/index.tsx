import Sidebar from 'components/menu/side-bar';
import SideBarTop from 'components/menu/side-bar-top';
import { useListener } from 'context/event-bus';
import { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ContainerTop, ContentHeader } from './styles';

const Header = <T extends RouteComponentProps>({
	location: { pathname }
}: T): JSX.Element => {
	const [showSideBar, setShowSideBar] = useState<boolean>(false);

	useListener('showHeaderNavControl', () => {
		console.log('show-header-nav-control');
	});

	return (
		<>
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
		</>
	);
};

export default withRouter(Header);
