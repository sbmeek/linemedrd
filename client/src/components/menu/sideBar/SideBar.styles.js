import styled from '@emotion/styled';
import { Link as ComponentLink } from 'react-router-dom';

const mostrarNavigation = `
animation: showNav 450ms linear both;

@keyframes showNav {
	from {
		transform: translateY(-80rem);
	}
	to {
		transform: translateY(0);
	}
}
`;

const ocultarNavigation = `
animation: hideNav 250ms linear both;
@keyframes hideNav {
	0% {
		transform: translateY(0);
		
	}
	100% {
		transform: translateY(-80rem);
	}
}

`;

const mostrar = props => {
	return props.show ? mostrarNavigation : ocultarNavigation;
};

export const ContentNav = styled.nav`
	width: 100%;
	min-height: 100vh;
	background-color: ${({ theme }) => theme.colors.green4};
	z-index: 200;
	padding-top: 3.5rem;
	transform: translateY(-80rem);
	position: fixed;
	${mostrar};
`;

export const SideTop = styled.div`
	z-index: 200;
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
	text-align: center;
`;

export const Link = ButtonLink.withComponent(ComponentLink);
