import styled from '@emotion/styled';

export const ContentInput = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;

	margin-bottom: 0.5rem;

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
		${({ theme }) => ({
			backgroundColor: theme.colors.green1,
			color: theme.calendarNotify.blue1,
			fontFamily: theme.fonts.segoeui
		})}

		&::placeholder {
			color: ${({ theme }) => theme.iconPlaceholder.grayTraps1};
		}
	}
`;

export const CheckboxContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	vertical-align: middle;
	margin: 0.7rem 0;

	& label {
		text-align: justify;
		padding: 0rem 0.5rem;
		cursor: pointer;
		${({ theme }) => ({
			color: theme.colors.green5,
			fontFamily: theme.fonts.segoeui
		})}
	}

	& input[type='checkbox'] {
		cursor: pointer;
		border-color: ${({ theme }) => theme.colors.green5};
	}
`;
