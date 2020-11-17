import styled, { keyframes } from 'styled-components';

export const LoaderContainer = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 100%;
	width: 100%;
	background: #fff;
`;

const writingAnim = keyframes`
		0% {
			content: 'C';
		}

		10% {
			content: 'Ca';
		}

		20% {
			content: 'Car';
		}

		30% {
			content: 'Carg';
		}

		40% {
			content: 'Carga';
		}

		50% {
			content: 'Cargan';
		}

		60% {
			content: 'Cargand';
		}

		70% {
			content: 'Cargando';
		}

		80% {
			content: 'Cargando.';
		}

		90% {
			content: 'Cargando..';
		}

		100% {
			content: 'Cargando...';
		}
`;

export const CargandoTxt = styled.h2`
	margin-top: 16px;
	color: #484848;
	font-family: NunitoExtraBold;

	&::after {
		content: '';
		animation: ${writingAnim} 1.3s linear 30ms infinite;
	}
`;
