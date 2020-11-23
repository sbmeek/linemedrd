import styled from 'styled-components';
import { Card, CardContent, Button } from '@material-ui/core';

export const Title = styled.h2`
	margin: 2%;
	font-family: NunitoExtraBold !important;
	text-align: center;
	text-transform: uppercase;
	color: var(--lmed-green-02) !important;
	font-weight: bolder !important;
`;

export const ImgStyle = styled.img`
	width: 20%;
	align-self: center;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	&::-webkit-scrollbar {
		width: 6px;
		height: 6px;
	}
	&::-webkit-scrollbar-thumb {
		background: var(--lmed-green-00);
		border-radius: 10px;
	}
	scrollbar-width: thin;
	scrollbar-color: var(--lmed-green-00) transparent;
`;

export const StyledCard = styled(Card)`
	align-self: center;
	margin: 2%;
	width: 95%;
	box-shadow: none !important;
	border-radius: 12px !important;
	& * {
		color: #ffff !important;
	}
`;

export const CardBody = styled(CardContent)`
	background-color: ${(props) => (props.bgColor ? props.bgColor : 'gray')};
`;

export const BtnPDF = styled(Button)`
	width: 70px;
	height: 44px;
	border-radius: 30px !important;
	background-color: #ffff !important;
	& * {
		color: ${(props) => (props.color ? props.color : 'gray')} !important;
	}

	& svg {
		width: 60%;
		max-height: 40px;
	}

	& > span {
		max-height: 100%;
	}
`;

export const AppointInfo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: ${(props) => (props.secondRow ? 'center' : '')};
	margin-top: ${(props) => (props.secondRow ? '25px' : '')};
`;

export const AppointWrapper = styled.div`
	font-size: 15px;
	width: 65%;
`;
