import styled from '@emotion/styled';

export const Input = styled.input`
	width: 100%;
	max-width: 100%;
	margin: 0.6rem 0;
	padding: 0.7rem 0.5rem;
	border-radius: 0.4rem;
	border: none;
	${({ theme }) => ({
		backgroundColor: theme.colors.green1,
		color: theme.calendarNotify.blue1,
		fontFamily: theme.fonts.segoeui
	})}

	&::placeholder {
		color: ${({ theme }) => theme.iconPlaceholder.grayTraps1};
	}
`;

export const Link = styled.div`
	text-align: left;
	color: ${({ theme }) => theme.colors.green5};
`;

export const Anclaje = styled.a`
	text-decoration: none;
	font-size: 1rem;
	${({ theme }) => ({
		fontFamily: theme.fonts.segoeui,
		color: theme.calendarNotify.blue1
	})};

	transition: color 300ms ease-out;

	&:hover {
		color: ${({ theme }) => theme.calendarNotify.blue2};
	}
`;

export const Submit = styled.button`
	border-radius: 0.4rem;
	width: 100%;
	max-width: 100%;
	padding: 0.5rem 0;
	margin: 2.5rem 0 1.3rem 0;
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
