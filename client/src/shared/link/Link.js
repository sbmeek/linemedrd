import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

function prueba(props) {
	return props.left ? 'left' : 'center';
}

export const ContentLink = styled.div`
	text-align: ${prueba};
	font-size: 1.01rem;
	${({ theme }) => ({
		color: theme.colors.green5,
		fontFamily: theme.fonts.segoeui
	})}
`;

export default styled(Link)`
	text-decoration: none;
	font-size: 1rem;
	${({ theme }) => ({
		fontFamily: theme.fonts.segoeui,
		color: theme.calendarNotify.blue1
	})};

	transition: color 200ms ease-out;

	&:hover {
		color: ${({ theme }) => theme.calendarNotify.blue2};
	}

	&:active {
		color: ${({ theme }) => theme.calendarNotify.blue2};
	}
`;
