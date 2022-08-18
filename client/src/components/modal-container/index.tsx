import { CloseIcon } from 'assets/icon/close-icon/close-icon';
import { Fragment, PropsWithChildren } from 'react';
import {
	ContainerModal,
	IconCloseModal,
	LogoCompany,
	ModalBody,
	ModalContent,
	ModalContentBody,
	ModalContentChildren,
	ModalHeader,
	ModalHeaderIcon,
	ModalText,
	ModalTitle,
	ModalTitleCompany,
	TextCloseModal
} from './styles';

interface IPropsModalContainer {
	title: string;
	text: string;
	show: boolean;
	textIcon?: string;
	onClose: () => void;
}

const ModalContainer: <T extends PropsWithChildren<IPropsModalContainer>>(
	props: T
) => JSX.Element = ({ show, title, text, textIcon, children, onClose }) => {
	return (
		<Fragment>
			<ContainerModal show={show}>
				<ModalContent>
					<ModalHeader>
						<ModalHeaderIcon onClick={onClose}>
							<IconCloseModal>
								<CloseIcon
									width="1.3rem"
									height="1.3rem"
									color={'var(--gray-num2)'}
								/>
							</IconCloseModal>
							<div>
								<TextCloseModal>{textIcon || 'Cancelar'}</TextCloseModal>
							</div>
						</ModalHeaderIcon>
					</ModalHeader>
					<ModalBody>
						<ModalContentBody>
							<ModalTitleCompany>
								<LogoCompany />
								<h3>Concitmed</h3>
							</ModalTitleCompany>
							<ModalTitle>{title}</ModalTitle>
							<ModalText>{text}</ModalText>
							<ModalContentChildren>{children}</ModalContentChildren>
						</ModalContentBody>
					</ModalBody>
				</ModalContent>
			</ContainerModal>
		</Fragment>
	);
};

export default ModalContainer;
