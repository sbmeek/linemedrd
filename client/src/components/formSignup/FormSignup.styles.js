import styled from '@emotion/styled';

export const CheckboxContainer = styled.label`
	display: flex;
	justify-content: flex-start;
	position: relative;
	cursor: pointer;
	align-items: center;
	margin: 0.7rem 0;
	position: relative;

	& input {
		display: none;
		--webkit-appearance: none;
	}

	& span {
		text-align: justify;
		padding: 0 1.4rem;
		cursor: pointer;
		${({ theme }) => ({
			color: theme.colors.green5,
			fontFamily: theme.fonts.segoeui
		})}

		&::before {
			content: '';
			border-radius: 0.2rem;
			border-color: ${({ theme }) => theme.colors.green5};
			border-width: 0.1rem;
			border-style: solid;
			width: 1rem;
			height: 1rem;
			position: absolute;
			top: 45%;
			left: 0%;
		}
	}

	& input:checked + span::after {
		content: '';
		font-size: 0.8em;
		display: block;
		position: absolute;
		top: 46%;
		left: 1.5%;
		min-height: 0.7rem;
		min-width: 0.4rem;
		transform: rotate(45deg);
		border-bottom: 0.1rem solid;
		border-right: 0.1rem solid;
		color: ${({ theme }) => theme.calendarNotify.blue1};
	}

	& input:checked + span::before {
		animation-name: checkContent;
		animation-timing-function: ease;
		animation-fill-mode: forwards;
		animation-duration: 4ms;
	}

	@keyframes checkContent {
		from {
			opacity: 0;
		}
		to {
			${({ theme }) => ({
				borderColor: theme.calendarNotify.blue1,
				color: theme.calendarNotify.blue1
			})}
			opacity: 1;
		}
	}
`;
