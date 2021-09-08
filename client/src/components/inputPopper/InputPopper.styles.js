import styled from '@emotion/styled';

export const Emergente = styled.div`
	background-color: ${({ theme }) => theme.letter.gray1};
	color: ${({ theme }) => theme.colors.white};
	padding: 0.38rem;
	font-size: 1rem;
	border-radius: 0.4rem;
	width: 13rem;
`;

export const ContentPopper = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	position: relative;

	.icon-content {
		padding-top: 0.2rem;
		fill: ${({ theme }) => theme.colors.white};

		.icon-popper {
			height: 1.2rem;
			width: 1.2rem;
		}
	}

	div:last-child {
		margin-left: 0.3rem;
		text-align: justify;
	}

	:before {
		content: '';
		position: absolute;
		left: 0.5rem;
		top: -0.91rem;
		width: 0.95rem;
		height: 0px;
		border-left: 7px solid transparent;
		border-right: 7px solid transparent;
		border-bottom: 14px solid ${({ theme }) => theme.letter.gray1};
		border-radius: 2px;
	}
`;
