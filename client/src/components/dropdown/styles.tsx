import styled from '@emotion/styled';

import { Props } from '@emotion/react';
import { ContentInput, InputProps, Input } from 'shared/input';
import { Icon } from 'shared/input-icon';

export const ContentHeader = styled.header`
	position: fixed;
	display: flex;
	flex-direction: column;
	top: 0;
	left: 0;
	width: 100%;
	height: auto;
	max-height: 100%;
	z-index: 300;
`;

export const Overlay = styled.div<{ visible: boolean }>`
	visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
	z-index: ${({ visible }) => (visible ? 1 : -999999)};
	background-color: ${({ theme }) => theme.colors.white};
	border: solid 1px ${({ theme }) => theme.colors.green4};
	outline: none;
	border-radius: 0 0 0.4rem 0.4rem;
	font-size: 1rem;
	font-family: ${({ theme }) => theme.fonts.segoeui};
	width: 100%;
	position: absolute;
	top: 0;
	margin-top: 50px;
	border-top: none;
	padding: 10px 20px 8px 20px;
	cursor: default;
`;

export const GroupTitle = styled.div`
	color: ${({ theme }) => theme.inputSelectMultiple.word.title};
	font-weight: 300;
	padding: 0.5rem 0;
`;

export const GroupData = styled.div`
	color: ${({ theme }) => theme.inputSelectMultiple.word.data};

	:hover {
		background-color: ${({ theme }) => theme.colors.green1};
	}

	::before {
		content: '○ ';
	}
`;

export const DropdownOption = styled.div``;

type InputSelect = Omit<InputProps, 'error'> & {};

const animationInput = (props: InputProps & Props) => {
	const { value } = props;
	return value
		? null
		: '&:focus {animation: moveInputTest 0.25s ease-in-out forwards;}';
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
	z-index: 2;
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
		left: 1.98rem;
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

// export const

export const StartIcon = styled(Icon)`
	left: 0.6rem;
	right: unset;
	transform: rotate(269deg);
	font-size: 1.1rem;
	fill: ${({ theme }) => theme.colors.green4};
`;

export const EndIcon = styled(Icon)<{ visible: boolean }>`
	transform: ${({ visible }) => (visible ? 'rotate(-90deg)' : 'rotate(90deg)')};
	font-size: 1.1rem;
	right: 0.75rem;
	fill: ${({ theme }) => theme.colors.green4};
	transition: transform 300ms cubic-bezier(0.47, 0.63, 0.65, 0.61);
`;
