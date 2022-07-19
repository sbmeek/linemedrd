import styled from '@emotion/styled';
import { Props } from '@emotion/react';
import { ContentInput, Wrapper, InputProps, Input } from 'shared/input';
import { Icon } from 'shared/input-icon';

type InputSelect = Omit<InputProps, 'error'> & {};

const animationInput = (props: InputProps & Props) => {
	const { value } = props;
	return value
		? null
		: `&:focus {animation: moveInputTest 0.25s ease-in-out forwards;}`;
};

const textContent = (props: InputSelect & Props) => {
	const { value, placeholder } = props;
	return !value ? placeholder : null;
};

const borderColor = (props: InputSelect & Props) => {
	const { theme, value } = props;
	const colorB = value
		? theme.calendarNotify.blue1
		: theme.inputSelectMultiple.border.withFocus;
	return colorB;
};

export const ContainerInput = styled(ContentInput)``;

export const WrapperDrowndown = styled.div<InputSelect>`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	outline: none;
	font-size: 1rem;
	width: 100%;
	max-width: 100%;
	margin-top: 0.6rem;
	border-radius: 0.4rem;
	border: 0.01rem
		${({ theme }) => theme.inputSelectMultiple.border.withoutFocus} solid;
	background-color: ${({ theme }) =>
		theme.inputSelectMultiple.content.background};
	position: relative;
	transition: border 120ms cubic-bezier(0.1, -0.6, 0.2, 0), color 400ms;

	::after {
		content: '${textContent}';
		color: ${({ theme }) => theme.iconPlaceholder.grayTraps1};
		position: absolute;
		left: 1.93rem;
		z-index: 0;
		pointer-events: none;
		/* padding-right: 2rem;
		padding-left: 1.5rem; */
	}

	&:focus-within {
		border-color: ${borderColor};
	}
`;

export const InputSearch = styled(Input)`
	background: none;
	width: 100%;
	outline: none;
	border: none;
	border-radius: 0.4rem;
	font-size: 1rem;
	padding: 0.7rem 2rem;
	${({ theme }) => ({
		color: theme.calendarNotify.blue1,
		fontFamily: theme.fonts.segoeui,
		caretColor: theme.colors.green4
	})};

	${animationInput}

	@keyframes moveInputTest {
		from {
			padding-left: 3.2rem;
		}
		to {
			padding-left: 2rem;
		}
	}
`;

export const StartIcon = styled(Icon)`
	left: 0.6rem;
	right: unset;
	transform: rotate(269deg);
	font-size: 1.1rem;
	fill: ${({ theme }) => theme.colors.green4};
`;

export const EndIcon = styled(Icon)`
	transform: rotate(90deg);
	font-size: 1.1rem;
	right: 0.75rem;
	top: 45%;
	fill: ${({ theme }) => theme.colors.green4};
	transition: transform 300ms cubic-bezier(0.47, 0.63, 0.65, 0.61);

	:active {
		transform: rotate(270deg);
	}
`;
