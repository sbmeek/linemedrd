import styled from '@emotion/styled';

const mostrarNavigation = `
animation: showNav 400ms ease-in-out both;

@keyframes showNav {
	from {
		transform: translateY(-200rem);
	}
	to {
		transform: translateY(0);
	}
}
`;

const ocultarNavigation = `
animation: hideNav 600ms linear both;
@keyframes hideNav {
	0% {
		transform: translateY(0);
		
	}
	100% {
		transform: translateY(-200rem);
	}
}

`;

const mostrar = props => {
	return props.show ? mostrarNavigation : ocultarNavigation;
};

export const ContentNav = styled.nav`
	width: 100%;
	height: 100vh;
	min-height: 50vh;
	max-height: 100vh;
	background-color: ${({ theme }) => theme.colors.green4};
	z-index: 200;
	padding-top: 3.6rem;
	transform: translateY(-200rem);
	position: fixed;
	overflow-y: auto;
	${mostrar};
`;
