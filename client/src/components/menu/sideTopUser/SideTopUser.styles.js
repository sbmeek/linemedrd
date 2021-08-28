import styled from '@emotion/styled';
import { Link as ComponentLink } from 'react-router-dom';
import SideTop, { ContentTop } from '@/shared/sideTop/SideTop';

export const SideUserTop = styled(SideTop)`
	background-color: ${({ theme }) => theme.colors.green5};
`;

export const Content = ContentTop;

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
	text-align: center;
`;

export default ButtonLink.withComponent(ComponentLink);
