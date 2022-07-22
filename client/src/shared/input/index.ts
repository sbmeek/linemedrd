import { Props } from '@emotion/react';
import styled from '@emotion/styled';

export type InputProps = {
	value: string;
	placeholder?: string;
	error?: string;
};

const textContent = (props: InputProps & Props) => {
	const { value, placeholder } = props;
	return !value ? placeholder : null;
};

const borderColor = (props: InputProps & Props) => {
	const { theme, value } = props;
	const colorB = value ? theme.calendarNotify.blue1 : theme.colors.green4;
	return colorB;
};

const borderError = (props: InputProps & Props) => {
	const { error, theme } = props;
	return error && `border-color: ${theme.letter.error01};`;
};

const animationInput = (props: InputProps & Props) => {
	const { value } = props;
	return value
		? null
		: `&:focus {animation: moveInput 0.25s ease-in-out forwards;}`;
};

export const ContentInput = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	outline: none;
	position: relative;

	label {
		color: ${({ theme }) => theme.colors.green5};
		font-family: ${({ theme }) => theme.fonts.segoeui};
		text-align: left;
		font-size: 0.888rem;
		font-weight: 600;
		letter-spacing: 0.05rem;
	}
`;

export const Wrapper = styled.div<InputProps>`
	display: flex;
	align-items: center;
	outline: none;
	border: 0.0995rem solid transparent;
	border-radius: 0.4rem;
	font-size: 1rem;
	width: 100%;
	max-width: 100%;
	margin-top: 0.6rem;
	position: relative;
	transition: border 120ms cubic-bezier(0.1, -0.6, 0.2, 0), color 400ms;
	background-color: ${({ theme }) => theme.colors.green1};
	z-index: 2;

	::after {
		content: '${textContent}';
		color: ${({ theme }) => theme.iconPlaceholder.grayTraps1};
		position: absolute;
		left: 0.6rem;
		z-index: 0;
		pointer-events: none;
	}

	&:focus-within {
		border-color: ${borderColor};
	}

	${borderError}
`;

export const Input = styled.input<InputProps>`
	background: none;
	width: 100%;
	outline: none;
	border: none;
	border-radius: 0.4rem;
	font-size: 1rem;
	padding: 0.7rem 0.5rem;
	${({ theme }) => ({
		color: theme.calendarNotify.blue1,
		fontFamily: theme.fonts.segoeui,
		caretColor: theme.colors.green4
	})};

	${animationInput}

	@keyframes moveInput {
		from {
			padding-left: 1.7rem;
		}
		to {
			padding-left: 0.5rem;
		}
	}
`;

export const InputHelper = styled.div<{ hide: boolean }>`
	display: ${({ hide }) => (hide ? 'none' : 'flex')};
	color: ${({ theme }) => theme.letter.error01};
	padding-left: 3px;

	span {
		padding-left: 5px;
	}

	svg {
		fill: ${({ theme }) => theme.letter.error01};
		width: 1em;
		margin-top: 2px;
	}
`;
