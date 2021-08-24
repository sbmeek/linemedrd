import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LinkLogo = styled(Link)`
	margin-left: 2%;
	text-decoration: none;

	& h1 {
		font-family: ${({ theme }) => theme.fonts.neufreit};
		font-size: 1.5rem;
	}
	color: ${props =>
		props.color === '/' ? props.theme.colors.green5 : props.theme.colors.white};
`;

export const ContainerLogo = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 80%;
	margin-right: auto;
	max-width: 100%;
`;

export const Rombo = styled.div`
	width: 1rem;
	height: 1rem;
	background-color: ${props =>
		props.color === '/' ? props.theme.colors.green5 : props.theme.colors.white};
	border-radius: 0.2rem;
	transform: rotate(45deg);
`;

export const ContentIconMenu = styled.div`
	display: flex;
	align-items: center;
	font-size: 1.6rem;

	color: ${props =>
		props.color === '/' ? props.theme.colors.green5 : props.theme.colors.white};

	& .icon {
		animation: found 600ms ease-in-out both;
	}

	@keyframes found {
		from {
			appearance: none;
			opacity: 0;
		}
		to {
			appearance: initial;
			opacity: 1;
		}
	}
`;
