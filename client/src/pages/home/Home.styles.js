import styled from '@emotion/styled';

export const Prueba = styled.div`
	@font-face {
		font-family: letra1;
		src: url(${({ theme }) => theme.fonts.neufreit});
	}

	${({ theme }) => ({
		color: theme.colors.green2,
		background: theme.colors.green1
	})};
	font-family: letra1;
	font-size: large;
`;

export const Button = styled.button`
	@font-face {
		font-family: letra2;
		src: url(${({ theme }) => theme.fonts.segoeuiBold});
	}

	color: ${props => props.theme.colors.white};
	background-color: ${props => props.theme.colors.green3};
	border: none;
	border-radius: 1rem;
	margin: 2rem;
	padding: 0.5rem;
	font-family: letra2;

	&:hover {
		background-color: ${props => props.theme.colors.green2};
	}
`;
