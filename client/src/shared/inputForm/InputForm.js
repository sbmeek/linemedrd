import styled from '@emotion/styled';

export default styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	margin-bottom: 0.5rem;
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
		border-radius: 0.4rem;
		border: none;
		font-size: 1rem;

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

	/* & input:hover {
		transition: none;
		animation-name: border;
		animation-duration: 0.55s;
		animation-fill-mode: forwards;
	} */

	& input:focus {
		animation-name: border;
		animation-timing-function: cubic-bezier(0.1, -0.6, 0.2, 0);
		animation-duration: 100ms;
		animation-fill-mode: forwards;
	}

	& input:not(:placeholder-shown) {
		outline: 0.0996rem solid ${({ theme }) => theme.calendarNotify.blue1};
	}

	@keyframes border {
		from {
			outline: 0 solid ${({ theme }) => theme.colors.green4};
		}
		to {
			outline: 0.0996rem solid ${({ theme }) => theme.colors.green4};
		}
	}
`;
