import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ContentLink = styled.div`
	text-align: center;
	font-size: 1.088rem;
	${({ theme }) => ({
		color: theme.colors.green5,
		fontFamily: theme.fonts.segoeui
	})}
`;

export default styled(Link)`
	text-decoration: none;
	font-size: 1rem;
	margin-left: 0.2rem;
	${({ theme }) => ({
		fontFamily: theme.fonts.segoeui,
		color: theme.calendarNotify.blue1
	})};

	transition: color 200ms ease-out;

	&:hover {
		color: ${({ theme }) => theme.calendarNotify.blue2};
	}

	&:clip {
		color: ${({ theme }) => theme.calendarNotify.blue2};
	}
`;
