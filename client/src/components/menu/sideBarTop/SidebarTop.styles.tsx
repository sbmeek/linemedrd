import { Props } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

type PathnameProp = { pathname: string };

const getPathnameColor = (props: Props & PathnameProp) =>
	props.pathname === '/' ? props.theme.colors.green5 : props.theme.colors.white;

export const LinkLogo = styled(Link)<PathnameProp>`
	margin-left: 2%;
	text-decoration: none;
	color: ${getPathnameColor};

	& h1 {
		font-family: ${({ theme }) => theme.fonts.neufreit};
		font-size: 1.5rem;
	}
`;

export const ContainerLogo = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 80%;
	margin-right: auto;
	max-width: 100%;
`;

export const Diamond = styled.div<PathnameProp>`
	width: 1rem;
	height: 1rem;
	background-color: ${getPathnameColor};
	border-radius: 0.2rem;
	transform: rotate(45deg);
`;

export const ContentIconMenu = styled.div<PathnameProp>`
	display: flex;
	align-items: center;
	font-size: 1.6rem;
	color: ${getPathnameColor};

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
