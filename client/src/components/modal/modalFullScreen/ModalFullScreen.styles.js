import styled from '@emotion/styled';

export const ModalClose = styled.div`
	position: fixed;
	top: 10%;
	left: 1.4rem;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 0.5rem 0;
	z-index: 100;
	cursor: pointer;

	div {
		font-size: 1.2rem;

		${({ theme }) => ({
			color: theme.letter.gray2,
			fill: theme.letter.gray2
		})};

		:first-of-type {
			display: flex;
			align-items: center;
		}

		:last-child {
			margin-left: 0.4rem;
		}
	}
`;

export default styled.div`
	z-index: 90;
	position: fixed;
	width: 100%;
	height: 100vh;
	background-color: ${({ theme }) => theme.background.content};

	&.open {
		animation: modalAnimated 500ms ease-in-out forwards;
	}

	&.close {
		animation: modalHideAnimated 500ms ease-in-out forwards;
	}

	@keyframes modalAnimated {
		from {
			opacity: 0;
			transform: translateY(-90rem);
		}
		to {
			opacity: 1;
			transform: translateY(0rem);
		}
	}

	@keyframes modalHideAnimated {
		from {
			opacity: 1;
			transform: translateY(0rem);
		}
		to {
			opacity: 0;
			transform: translateY(-90rem);
		}
	}
`;
