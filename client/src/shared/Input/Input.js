import styled from '@emotion/styled';

const changeText = props => {
	console.info(props);
	const {
		text: { value, placeholder }
	} = props;

	return value !== '' ? `content: ${value}` : `content: '${placeholder}'`;
};

const inputEmpty = `
    padding-left: 1.2rem;

    &:focus {
    animation: moveInput 0.25s ease-in-out forwards;
    };
`;

const inputNotEmpty = `
    padding-left: 0rem;
`;

const inputEmptyBorder = color => `
	&:focus-within {
		border: 0.0995rem solid ${color};
	}
`;

const inputNotEmptyBorder = color => `
	&:focus-within {
		border: 0.0995rem solid ${color};
	}
`;

const paddingInput = props => {
	const {
		text: { value }
	} = props;

	return value !== '' ? inputNotEmpty : inputEmpty;
};

const colorBorder = props => {
	const {
		text: { value },
		theme
	} = props;

	return value === ''
		? inputNotEmptyBorder(theme.colors.green4)
		: inputEmptyBorder(theme.calendarNotify.blue1);
};

export const ContainerInputS = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	margin-bottom: 0.7rem;
	outline: none;

	label {
		color: ${({ theme }) => theme.colors.green5};
		font-family: ${({ theme }) => theme.fonts.segoeui};
		text-align: left;
		font-size: 0.888rem;
	}
`;

export default styled.div`
	outline: none;
	border: unset;
	outline: none;
	border: none;
	border-radius: 0.4rem;
	font-size: 1rem;
	width: 100%;
	max-width: 100%;
	margin: 0.6rem 0;
	padding: 0.7rem 0.5rem;
	position: relative;
	transition: border 120ms cubic-bezier(0.1, -0.6, 0.2, 0), color 400ms;

	${({ theme }) => ({
		backgroundColor: theme.colors.green1
	})}

	::after {
		${changeText};
		position: absolute;
		left: 0.6rem;
		z-index: 0;

		${({ theme }) => ({
			color: theme.iconPlaceholder.grayTraps1,
			fontFamily: theme.fonts.segoeui
		})};
	}

	input {
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

		${paddingInput};

		@keyframes moveInput {
			from {
				padding: 0rem 1.2rem;
			}
			to {
				padding: 0rem 0rem;
			}
		}
	}
	${colorBorder};
`;
