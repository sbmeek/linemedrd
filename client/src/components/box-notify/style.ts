import styled from '@emotion/styled';
import { Link } from 'shared/button-link';

export const ContentNotify = styled.div`
	width: 100%;
	margin: auto;
	max-width: 100%;
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => theme.colors.green5};
	color: ${({ theme }) => theme.colors.white};
	border-radius: 0.3rem;
`;

export const ContainerNotify = styled.div`
	padding: 0rem 1rem;
`;

export const TitleNotify = styled.p`
	font-size: 1rem;
	font-family: ${({ theme }) => theme.fonts.segoeuiBold};
	padding: 0.5rem 0rem;
`;

export const SubTitleNotify = styled.p`
	font-size: 0.9rem;
`;

export const LinkButton = styled(Link)`
	background-color: ${({ theme }) => theme.colors.green3};
	margin: 0.5rem 0 0 0;
`;
