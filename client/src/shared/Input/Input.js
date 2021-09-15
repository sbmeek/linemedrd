import styled from '@emotion/styled';

const contenText = props => {
	const { theme, value, content } = props;
	return {
		content: !value ? `"${content}"` : null,
		color: theme.iconPlaceholder.grayTraps1
	};
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

	&.empty:focus-within {
		border: 0.0995rem ${({ theme }) => theme.colors.green4};
	}

	::after {
		${contenText};
		position: absolute;
		left: 0.6rem;
		z-index: 0;
		pointer-events: none;
	}
`;

export const InputWrapper = styled.input`
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

	/* paddingInput */
	&.empty:focus {
		padding-left: 1.2rem;

		&:focus {
			animation: moveInput 0.25s ease-in-out forwards;
		}
	}

	@keyframes moveInput {
		from {
			padding-left: 1.2rem;
		}
		to {
			padding-left: 0rem;
		}
	}
`;
