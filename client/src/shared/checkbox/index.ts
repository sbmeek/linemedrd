import { Props } from '@emotion/react';
import styled from '@emotion/styled';

export const CheckboxContainer = styled.label<{ error: boolean }>`
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
			border-width: 0.1rem;
			border-style: solid;
			width: 1rem;
			height: 1rem;
			position: absolute;
			top: 45%;
			left: 0%;

			${({ error, theme }: Props & { error: boolean }) => {
				return error
					? { borderColor: theme.letter.error01 }
					: theme.colors.green5;
			}}
		}

		&::after {
			content: '';
			opacity: 0;
			position: absolute;
			/* display: none; */
			top: 46%;
			left: 0.36rem;
			display: block;
			min-height: 0.7rem;
			min-width: 0.3rem;
			border-bottom: 0.1rem solid;
			border-right: 0.1rem solid;
			transform: rotate(45deg);
		}
	}

	& input:checked + span::after {
		content: '';
		animation-name: checkContent;
		animation-timing-function: linear;
		animation-fill-mode: forwards;
		animation-duration: 250ms;
	}

	& input:checked + span::before {
		animation-name: checkContent;
		animation-timing-function: ease;
		animation-fill-mode: forwards;
		animation-duration: 500ms;
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
