import styled from '@emotion/styled';

export const ContentHeader = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	min-width: 100%;
	min-height: 100vh;
`;

export const ContainerTop = styled.nav`
	display: flex;
	width: 100%;
	max-width: 100%;
	padding: 1rem;
	border: none;
	justify-content: space-between;
	z-index: 4;

	${({ theme }) => ({
		backgroundColor: theme.colors.green5,
		color: theme.calendarNotify.blue1,
		fontFamily: theme.fonts.segoeui
	})}

	& h1 {
		font-size: 1rem;
	}
`;

export const ContainerLogo = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 80%;
	margin-right: auto;
	max-width: 100%;

	& h1 {
		color: ${({ theme }) => theme.colors.white};
		font-family: ${({ theme }) => theme.fonts.neufreit};
		margin-left: 2%;
	}
`;

export const Rombo = styled.div`
	width: 1rem;
	height: 1rem;
	background-color: white;
	border-radius: 0.2rem;
	transform: rotate(45deg);
`;

export const ContentIconMenu = styled.div`
	display: flex;
	align-items: center;
`;
