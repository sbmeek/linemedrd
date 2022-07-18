import styled from '@emotion/styled';
import { Props } from '@emotion/react';
import { ContentInput, Wrapper, InputProps, Input } from 'shared/input';
import { Icon } from 'shared/input-icon';

type InputSelect = Omit<InputProps, 'error'> & {};

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

	padding-right: 2rem;
	padding-left: 1.5rem;

	::after {
		content: '${textContent}';
		color: ${({ theme }) => theme.iconPlaceholder.grayTraps1};
		position: absolute;
		left: 1.93rem;
		z-index: 0;
		pointer-events: none;
	}

	&:focus-within {
		border-color: ${borderColor};
	}
`;

export const InputSearch = styled(Input)``;

export const StartIcon = styled(Icon)`
	left: 0.6rem;
	right: none;
	fill: ${({ theme }) => theme.colors.green4};
`;

export const EndIcon = styled(Icon)`
	transform: rotate(90deg);
	fill: ${({ theme }) => theme.colors.green4};
	transition: transform 300ms cubic-bezier(0.47, 0.63, 0.65, 0.61);

	:active {
		transform: rotate(270deg);
	}
`;
