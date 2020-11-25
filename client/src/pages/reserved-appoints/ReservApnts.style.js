import styled from 'styled-components';
import { Card, CardContent } from '@material-ui/core';
import { PDFDownloadLink } from '@react-pdf/renderer';

export const Title = styled.h2`
	margin: 2%;
	font-family: NunitoExtraBold !important;
	text-align: center;
	text-transform: uppercase;
	color: var(--lmed-green-02) !important;
	font-weight: bolder !important;
`;

export const ImgStyle = styled.img`
	width: ${(props) => (props.isTeethIcon ? '16%' : '20%')};
	align-self: center;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	overflow: scroll !important;

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
	overflow: unset !important;
	box-shadow: none !important;
	& *:not(table > *) {
		color: #ffff !important;
	}
`;

export const CardBody = styled(CardContent)`
	background-color: ${(props) => (props.bgcolor ? props.bgcolor : 'gray')};
	border-radius: 20px !important;
`;

export const BtnPDF = styled(PDFDownloadLink)`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 70px;
	height: 44px;
	border-radius: 30px !important;
	background-color: #ffff !important;
	& * {
		color: ${(props) => (props.color ? props.color : 'gray')} !important;
	}

	& svg {
		width: 55%;
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
	color: #fff;
`;
