import styled from '@emotion/styled';

export const MainContainer = styled.main`
	width: 100%;
	min-height: 100vh;
	background-color: ${({ theme }) => theme.background.content};
`;

export const SharedContainerScreen = styled.div`
	position: fixed;
	display: flex;
	flex-direction: column;
	top: 0;
	left: 0;
	width: 100%;
	height: auto;
	max-height: 100%;
	z-index: 200;
`;

export const SharedContainer = styled.div`
	width: 80%;
	margin: auto;
	padding-top: 3.5rem;
	padding-bottom: 1rem;
`;

export const SharedContainerSection = styled.div`
	width: 80%;
	margin: auto;
`;

export const SharedContainerModal = styled.div`
	width: 100%;
	height: 100%;
	min-height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	background-color: ${({ theme }) => theme.modal.background};
	z-index: 400;
`;
