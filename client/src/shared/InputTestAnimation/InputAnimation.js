import styled from '@emotion/styled';

export const ContainerInputS = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	margin-bottom: 1rem;
	outline: none;

	& label {
		color: ${({ theme }) => theme.colors.green5};
		font-family: ${({ theme }) => theme.fonts.segoeuiBold};
		text-align: left;
		font-size: 0.88rem;
	}
`;

const changeText = props => {
	console.info(props);
	const {
		text: { value, placeholder }
	} = props;

	return value !== '' ? `content: ${value}` : `content: '${placeholder}'`;
};

const styleAnimation = `
    padding: 0rem 1.2rem;
    &:focus {
    animation: moveInput 0.3s ease-in-out forwards;
    };
`;

const paddingInput = props => {
	console.info(props);
	const {
		text: { value }
	} = props;

	return value !== '' ? `padding: 0rem 0rem` : styleAnimation;
};

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
		left: 0.5rem;
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

	&:focus-within {
		border: 0.0995rem solid ${({ theme }) => theme.colors.green4};
	}
`;
