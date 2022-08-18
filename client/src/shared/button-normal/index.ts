import styled from '@emotion/styled';

export const ButtonNormal = styled.button`
	border: none;
	border-radius: 0.3rem;
	width: 100%;
	padding: 0.6rem;
	font-weight: 500;
	letter-spacing: 0.1rem;
	font-weight: 500;
	text-decoration: none;
	cursor: pointer;
	text-align: center;
	display: block;
	background-color: ${({ theme }) => theme.colors.green5};

	${props => ({
		color: props.theme.colors.white,
		fontFamily: props.theme.fonts.segoeui
	})};

	.dark {
		background-color: ${props => props.theme.colors.green5};
	}
`;
