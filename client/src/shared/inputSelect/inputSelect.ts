import styled from '@emotion/styled';
import { Props } from '@emotion/react';

type InputProps = { value: string; placeholder?: string; error?: string };

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

export const ContentSelect = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	outline: none;
`;

export const WraperSelect = styled.div`
	display: flex;
	align-items: center;
	outline: none;
	border: 0.0035rem solid #0908088f;
	border-radius: 0.4rem;
	font-size: 1rem;
	width: 100%;
	max-width: 100%;
	margin-top: 0.6rem;
	position: relative;
	transition: border 120ms cubic-bezier(0.1, -0.6, 0.2, 0), color 400ms;
	background-color: ${({ theme }) => theme.colors.white};

	::after {
		content: 'Buscar especialidad';
		color: #c4c4c4;
		position: absolute;
		left: 0.6rem;
		z-index: 0;
		pointer-events: none;
	}

	&:focus-within {
		border-color: ${({ theme }) => theme.colors.green1};
	}
`;

export const InputSelect = styled.select`
	background: none;
	width: 100%;
	outline: none;
	border: none;
	border-radius: 0.4rem;
	font-size: 1rem;
	padding: 0.7rem 0.5rem;
	-moz-appearance: none;
	text-indent: 0.01px;
	text-overflow: '';
`;

export const ContentIconSelect = styled.div`
	position: absolute;
	width: 1.5rem;
	height: 1.5rem;
	right: 0.5rem;
	border-color: transparent;
	outline: unset;
	transform: rotate(90deg);
	display: flex;
	justify-content: center;
	align-items: center;
	fill: ${({ theme }) => theme.colors.green3};

	animation: arrowSelectOpen 1s cubic-bezier(0.77, 0, 0.18, 1) 0.2s infinite;

	@keyframes arrowSelectOpen {
		from {
			transform: rotate(90deg);
		}
		to {
			transform: rotate(-90deg);
		}
	}
`;

export const ContentIconSelectStart = styled.div`
	position: absolute;
	width: 1.5rem;
	height: 1.5rem;
	right: 0.5rem;
	fill: turquoise;
	outline: unset;
	display: flex;
	justify-content: center;
	align-items: center;
	fill: ${({ theme }) => theme.colors.green3};
`;
