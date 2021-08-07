import styled from '@emotion/styled';
import { Link as ComponentLink } from 'react-router-dom';

export const ContentNav = styled.nav`
	max-width: 100%;
	width: 100vw;
`;

export const SideBarMain = styled.div`
	background-color: ${props => props.theme.colors.green4};
	width: inherit;
	max-height: 80%;
	z-index: 100;
`;

export const SideBarTop = styled.div`
	z-index: 4;
	background-color: ${({ theme }) => theme.colors.green5};
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.5rem 2.8rem 1.5rem 2.8rem;
`;

export const ContentTop = styled.div`
	width: 100%;
	max-width: 100%;
	display: flex;
	flex-direction: column;
`;

const ButtonLink = styled.button`
	text-decoration: unset;
	font-size: 1rem;
	font-family: ${({ theme }) => theme.fonts.segoeui};
	color: ${({ theme }) => theme.colors.white};
	margin: 0.6rem 0;
	max-width: 100%;
	width: 100%;
	padding: 0.6rem;
	background-color: ${({ theme }) => theme.colors.green4};
	border-radius: 0.25rem;
	outline: unset;
	border: none;
`;

export const Link = ButtonLink.withComponent(ComponentLink);
