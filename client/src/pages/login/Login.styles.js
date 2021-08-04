import styled from '@emotion/styled';

export const Container = styled.div`
	width: 80%;
	margin: auto;
`;

export const Titulo = styled.h2`
	${({ theme }) => ({
		fontFamily: theme.fonts.neufreit,
		color: theme.colors.green3
	})};
	text-align: left;
	font-size: 1.9rem;
	margin: 1.7rem 0;
`;
