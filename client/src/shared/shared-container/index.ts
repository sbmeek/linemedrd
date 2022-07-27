import styled from '@emotion/styled';

export const MainContainer = styled.main`
	width: 100%;
	min-height: 100vh;
	background-color: ${({ theme }) => theme.background.content};
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
