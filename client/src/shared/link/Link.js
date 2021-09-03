import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

function align(props) {
	return props.left ? 'left' : 'center';
}

export const ContentLink = styled.div`
	text-align: ${align};
	font-size: 1.01rem;
	${({ theme }) => ({
		color: theme.colors.green5,
		fontFamily: theme.fonts.segoeui
	})}

	.modal {
	}
`;

export default styled(Link)`
	text-decoration: none;
	font-size: 1rem;
	transition: color 200ms ease-out;
	margin: 0%;

	${({ theme }) => ({
		fontFamily: theme.fonts.segoeui,
		color: theme.calendarNotify.blue1
	})};

	&:hover {
		color: ${({ theme }) => theme.calendarNotify.blue2};
	}

	&:active {
		color: ${({ theme }) => theme.calendarNotify.blue2};
	}
`;
