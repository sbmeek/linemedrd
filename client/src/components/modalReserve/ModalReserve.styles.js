import styled from '@emotion/styled';
import Title from 'shared/title/Title';
import Link, { ContentLink } from 'shared/link/Link';

export const ButtonIcon = styled.div`
	width: auto;
`;

export const TitleModal = styled(Title)`
	text-align: center;
	margin: 0 0 1rem 0;
`;

export const ModalInfo = styled(ContentLink)`
	text-align: justify;
	text-align-last: center;
	color: ${({ theme }) => theme.colors.green6};
	span {
		font-weight: bold;
	}
`;

export const LinkReserve = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	font-size: 1.25rem;

	.icon {
		fill: ${({ theme }) => theme.calendarNotify.blue1};
		height: 1.5rem;
		width: 1.5rem;
		margin: 0.4rem;
	}
`;

export const LinkButton = styled(Link)`
	${({ theme }) => ({
		fontFamily: theme.fonts.segoeuiBold,
		color: theme.calendarNotify.blue1
	})}
`;

export const ContainerModal = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	width: 80%;
	height: inherit;
	margin: auto;
`;

export const ContentModal = styled.div`
	display: flex;
	flex-direction: column;
	height: 48%;
	justify-content: space-evenly;
`;
