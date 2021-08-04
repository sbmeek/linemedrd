import styled from '@emotion/styled';

export default styled.button`
	border-radius: 0.4rem;
	width: 100%;
	max-width: 100%;
	padding: 0.5rem 0;
	margin: 1.4rem 0;
	text-align: center;
	border: none;
	font-size: 1.05rem;
	${({ theme }) => ({
		color: theme.colors.white,
		backgroundColor: theme.colors.green4,
		fontFamily: theme.fonts.segoeuiBold
	})}
	transition: background-color 300ms linear;

	&:hover {
		background-color: ${({ theme }) => theme.colors.green5};
	}
`;
