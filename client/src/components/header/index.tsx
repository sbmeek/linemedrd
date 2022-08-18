import Sidebar from 'components/menu/side-bar';
import SideBarTop from 'components/menu/side-bar-top';
import { useListener } from 'context/event-bus';
import { ComponentType, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ContainerTop, ContentHeader, ModalHeader } from './styles';

const Header = <T extends RouteComponentProps>({
	location: { pathname }
}: T): JSX.Element => {
	const [showSideBar, setShowSideBar] = useState<boolean>(false);
	const [showModalHeader, setShowModalHeader] = useState(false);

	let ModalTitleElement: ComponentType = () => <></>;

	useListener('showHeaderNavControl', modalTitleElement => {
		ModalTitleElement = modalTitleElement;
		setShowModalHeader(val => !val);
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
				<ModalHeader show={showModalHeader}>
					<ModalTitleElement />
				</ModalHeader>
			</ContentHeader>
			<Sidebar show={showSideBar} setShow={setShowSideBar} />
		</>
	);
};

export default withRouter(Header);
