import styled from '@emotion/styled';
import { Popper } from '@material-ui/core';

export const ContainerPopper = styled(Popper)`
	background-color: ${({ theme }) => theme.letter.gray1};
	color: ${({ theme }) => theme.colors.white};
	padding: 0.38rem;
	border-radius: 0.3rem;
	width: 9rem;
	padding: 0.4rem 0.1rem;
	margin-top: 1rem;
`;

export const ContentPopper = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	position: relative;

	.icon-content {
		fill: ${({ theme }) => theme.colors.white};

		.icon-popper {
			height: 1rem;
			width: 1rem;
		}
	}

	div:last-child {
		margin-left: 0.2rem;
		text-align: left;
		font-size: 0.68rem;
		word-wrap: break-word;
		margin-left: 0.2rem;
	}
`;

export const ArrowPopper = styled.div`
	position: absolute;
	left: 1rem;
	top: -1rem;
	width: 1rem;
	height: 0;
	border-left: 7px solid transparent;
	border-right: 7px solid transparent;
	border-bottom: 14px solid ${({ theme }) => theme.letter.gray1};
	border-radius: 2px;
`;
