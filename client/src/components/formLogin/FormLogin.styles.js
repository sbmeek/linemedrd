import { ContentLink } from '@/shared/link/Link';
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

export const ContainerLink = styled(ContentLink)`
	text-align: left;
	color: ${({ theme }) => theme.colors.green5};
`;
