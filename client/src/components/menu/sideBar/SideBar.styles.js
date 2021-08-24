import styled from '@emotion/styled';
import { Link as ComponentLink } from 'react-router-dom';

const mostrar = props => {
	return props.show ? 'animation: mostrarNav 250ms linear both;' : null;
};

export const ContentNav = styled.nav`
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.colors.green4};
	z-index: 5;
	transform: translateY(-100rem);

	${mostrar};

	@keyframes mostrarNav {
		from {
			opacity: 0;
			transform: translateY(inherit);
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}
`;

export const SideTop = styled.div`
	z-index: 5;
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
