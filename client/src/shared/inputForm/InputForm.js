import styled from '@emotion/styled';

const marginBottom = props => (props.login ? '0rem' : '0.5rem');

export default styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	margin-bottom: ${marginBottom};
	outline: none;

	& label {
		color: ${({ theme }) => theme.colors.green5};
		font-family: ${({ theme }) => theme.fonts.segoeuiBold};
		text-align: left;
		font-size: 0.88rem;
	}

	& input {
		width: 100%;
		max-width: 100%;
		margin: 0.6rem 0;
		padding: 0.7rem 0.5rem;
		outline: none;
		border: none;
		border-radius: 0.4rem;
		font-size: 1rem;
		transition: border 120ms cubic-bezier(0.1, -0.6, 0.2, 0), color 400ms;

		${({ theme }) => ({
			backgroundColor: theme.colors.green1,
			color: theme.calendarNotify.blue1,
			fontFamily: theme.fonts.segoeui,
			caretColor: theme.colors.green4
		})}

		&::placeholder {
			color: ${({ theme }) => theme.iconPlaceholder.grayTraps1};
		}
	}

	& input:focus {
		border: 0.0995rem solid ${({ theme }) => theme.colors.green4};
	}

	& input:not(:placeholder-shown) {
		border: 0.0995rem solid ${({ theme }) => theme.calendarNotify.blue1};
	}
`;
