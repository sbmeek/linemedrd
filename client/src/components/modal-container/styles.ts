import styled from '@emotion/styled';
import { minHeight } from '@mui/system';
import { Diamond } from 'shared/icono-diamond';
import { SharedContainerModal } from 'shared/shared-container';
import title from 'shared/title';

export const ContainerModal = styled(SharedContainerModal)<{ show: boolean }>`
	${({ show }) => (show ? `` : `display: none;`)}
`;

export const ModalContent = styled.div`
	max-width: 100%;
	min-height: 100vh;
	background-color: ${props => props.theme.colors.white};
	padding: 1rem;
	position: relative;
	z-index: 1;
	margin: 0;
	border-radius: 0;
`;

//#region ModalHeader
export const ModalHeaderIcon = styled.div`
	max-width: 100%;
	display: flex;
	justify-content: start;
	align-items: center;
	padding: 0;
	margin: 0;
	color: ${({ theme }) => theme.modal.buttonIcon};
`;

export const ModalHeader = styled.div`
	max-width: 100%;
	height: auto;
	background-color: ${props => props.theme.colors.white};
	display: flex;
	justify-content: start;
`;

export const IconCloseModal = styled.div`
	display: flex;
	align-items: center;
`;

export const TextCloseModal = styled.span`
	font-size: 0.9rem;
	font-family: ${({ theme }) => theme.fonts.segoeui};
	font-weight: 600;
	display: flex;
	align-items: center;
	margin-left: 0.4rem;
`;
//#endregion

//#region ModalBody
export const ModalBody = styled.div`
	max-width: 100%;
	height: 100%;
	display: flex;
	padding-top: 1rem;
	flex-direction: column;
	justify-content: start;
	align-items: center;
`;

export const ModalContentBody = styled.div`
	width: 80%;
	height: auto;
	margin: 1.6rem 0;
`;

export const ModalTitleCompany = styled.div`
	max-width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	color: ${props => props.theme.modal.logoAndTitle};

	& h3 {
		padding: 0.6rem 0;
		font-family: ${({ theme }) => theme.fonts.neufreit};
		font-size: 1.3rem;
	}
`;

export const LogoCompany = styled(Diamond)`
	background-color: ${props => props.theme.modal.logoAndTitle};
`;

export const ModalTitle = styled(title)`
	text-align: center;
`;

export const ModalText = styled.p`
	font-size: 0.925rem;
	font-family: ${({ theme }) => theme.fonts.segoeui};
	color: ${props => props.theme.modal.text};
	text-align: center;
`;

//#endregion

export const ModalContentChildren = styled.div`
	max-width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: start;
	margin-top: 2rem;
	text-align: center;
`;
