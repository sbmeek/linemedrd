import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export default styled(Link)`
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
