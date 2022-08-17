import styled from '@emotion/styled';
import { ButtonNormal } from 'shared/button-normal';

export const WrapperSchedule = styled.div`
	width: 100%;
	height: 2.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border-bottom-width: 1px;
	border-bottom-style: solid;
	border-bottom-color: ${({ theme }) => theme.letter.gray1};
`;

export const ContentSchedule = styled.div`
	width: 80%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	justify-content: space-between;
	fill: ${({ theme }) => theme.colors.green5};
	color: ${({ theme }) => theme.colors.green5};

	.icon-left {
		flex-grow: 0.2;
	}

	.icon-right {
		flex-grow: 0.2;
	}
`;

export const ContentScheduleDate = styled.div`
	width: auto;
	display: flex;
	gap: 0.7rem;
`;

export const WrapperDoctors = styled.div`
	width: 100%;
	min-height: 100%;
	max-height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-top-width: 1px;
	border-top-style: solid;
	border-top-color: ${({ theme }) => theme.letter.gray1};
	overflow-y: auto;
`;

export const WrapperDoctorsItem = styled.div`
	width: 100%;
	height: 40vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-width: 1px;
	border-style: solid;
	border-color: ${({ theme }) => theme.letter.gray1};
	justify-content: center;
`;

export const ContentDoctorsItem = styled.div`
	width: 80%;
	height: 100%;
	padding: 1rem 0.5rem;
	display: flex;
	flex-direction: column;

	.lineCard {
		width: 80%;
		height: 1px;
		margin: 0.5rem 0 0.5rem auto;
		background-color: ${({ theme }) => theme.letter.gray1};
	}

	figure {
		display: flex;
		flex-direction: row;

		img {
			width: 4rem;
			height: 4rem;
			border-radius: 50%;
			margin-right: 0.5rem;
		}

		figcaption {
			flex-grow: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-start;
			gap: 0.2rem;

			h3 {
				font-size: 1.2rem;
				font-family: 'segoeBold';
				color: ${({ theme }) => theme.colors.green5};
			}

			h4 {
				color: ${({ theme }) => theme.colors.green4};
				font-size: 0.85rem;
				letter-spacing: 0.05rem;
			}

			p {
				font-size: 0.9rem;
				font-weight: 500;
				color: ${({ theme }) => theme.letter.gray2};
				fill: ${({ theme }) => theme.letter.gray2};
				margin-top: 0.4rem;
			}
		}
	}
`;

export const ButtonSearchDoctor = styled(ButtonNormal)`
	font-family: ${({ theme }) => theme.fonts.segoeui};
	font-size: 1rem;
	font-weight: 500;
	letter-spacing: 0;
	color: ${({ theme }) => theme.colors.white};
	fill: ${({ theme }) => theme.colors.white};
	background-color: ${({ theme }) => theme.colors.green4};
	font-weight: 600;

	&.light {
		background-color: ${({ theme }) => theme.colors.green1};
		color: ${({ theme }) => theme.colors.green3};
		fill: ${({ theme }) => theme.colors.green3};
	}
`;
