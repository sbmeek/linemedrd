import styled from '@emotion/styled';

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
	font-size: 1.6rem;
	color: ${({ theme }) => theme.colors.white};

	&:active {
		animation: found 80ms both forwards;
	}

	@keyframes found {
		from {
			appearance: none;
			opacity: 0;
		}
		to {
			appearance: initial;
			opacity: 1;
		}
	}
`;
