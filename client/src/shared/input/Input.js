import styled from '@emotion/styled';

const textContent = props => {
	const { theme, value, content } = props;
	return {
		content: !value ? `"${content}"` : null,
		color: theme.iconPlaceholder.grayTraps1
	};
};

const bordersColor = props => {
	const { theme, value } = props;
	const colorB = value ? theme.calendarNotify.blue1 : theme.colors.green4;
	return colorB;
};

const bordersError = props => {
	const { error, theme } = props;
	return error && `0.0995rem solid ${theme.calendarNotify.orange2}`;
};

const animationInput = props => {
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

	label {
		color: ${({ theme }) => theme.colors.green5};
		font-family: ${({ theme }) => theme.fonts.segoeui};
		text-align: left;
		font-size: 0.888rem;
	}
`;

export const Wrapper = styled.div`
	outline: none;
	border: unset;
	outline: none;
	border: none;
	border-radius: 0.4rem;
	font-size: 1rem;
	width: 100%;
	max-width: 100%;
	margin-top: 0.6rem;
	padding: 0.7rem 0.5rem;
	position: relative;
	transition: border 120ms cubic-bezier(0.1, -0.6, 0.2, 0), color 400ms;
	background-color: ${({ theme }) => theme.colors.green1};

	::after {
		${textContent};
		position: absolute;
		left: 0.6rem;
		z-index: 0;
		pointer-events: none;
	}

	&:focus-within {
		border: 0.0995rem solid ${bordersColor};
	}

	border: ${bordersError} !important;
`;

export const Input = styled.input`
	background: none;
	width: 100%;
	outline: none;
	border: none;
	border-radius: 0.4rem;
	font-size: 1rem;
	${({ theme }) => ({
		color: theme.calendarNotify.blue1,
		fontFamily: theme.fonts.segoeui,
		caretColor: theme.colors.green4
	})};

	${animationInput}

	@keyframes moveInput {
		from {
			padding-left: 1.2rem;
		}
		to {
			padding-left: 0rem;
		}
	}
`;
