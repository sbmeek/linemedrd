import styled from '@emotion/styled';

export const Wrapper = styled.div`
	input {
		background: none;
		width: 100%;
		outline: none;
		border: none;
		border-radius: 0.4rem;
		font-size: 1rem;
		padding: 0.7rem 0.5rem;
		${({ theme }) => ({
			color: theme.calendarNotify.blue1,
			fontFamily: theme.fonts.segoeui,
			caretColor: theme.colors.green4
		})};
	}

	width: 100%;
	max-width: 100%;
	display: flex;
	align-items: center;
	outline: none;
	border: 0.0995rem solid transparent;
	border-radius: 0.4rem;
	font-size: 1rem;
	margin-top: 0.6rem;
	position: relative;
	transition: border 120ms cubic-bezier(0.1, -0.6, 0.2, 0), color 400ms;
	background-color: ${({ theme }) => theme.colors.green1};

	::after {
		content: 'Choose your browser from the list:';
		position: absolute;
		left: 0.6rem;
		z-index: 0;
		pointer-events: none;
	}

	&:focus-within {
		border-color: green;
	}
`;

// export const Icon = styled.div`
// 	position: absolute;
// 	right: 0.6rem;
// 	top: 30%;
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: center;
// 	font-size: 1.3rem;
// 	fill: ${({ theme }) => theme.colors.green5};
// `;

// export const IconLabel = styled(Icon)`
// 	top: 30%;
// `;

// export const InputWithIcon = styled(Input)`
// 	padding-right: 2rem;
// `;
