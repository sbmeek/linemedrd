import styled from '@emotion/styled';

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

export const WrapperDoctorsList = styled.div`
	width: 80%;
	height: auto;
	display: flex;
	flex-direction: column;
`;

export const WrapperDoctorsListItem = styled.div`
	height: 40vh;
	display: flex;
	flex-direction: column;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto;
	grid-template-areas:
		'photo details'
		'line line'
		'footer footer';

	.imgCard {
		grid-area: photo;
	}

	.detailsCard {
		grid-area: details;
	}

	.lineCard {
		grid-area: line;
	}

	.buttonCard {
		grid-area: footer;
	}
`;
