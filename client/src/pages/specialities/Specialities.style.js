import styled from 'styled-components';
import { Card, CardContent } from '@material-ui/core';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	overflow-y: auto;
	& svg {
		width: 20%;
		align-self: center;
	}

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

export const SpecialityIcon = styled.img`
	width: 60px;
	filter: invert(30%) sepia(43%) saturate(406%) hue-rotate(118deg)
		brightness(93%) contrast(88%);
`;

export const Title = styled.h1`
	margin: 2%;
	font-family: NunitoExtraBold !important;
	text-align: center;
	text-transform: uppercase;
	color: var(--lmed-green-02) !important;
	font-weight: bolder !important;
`;

export const ImgStyle = styled.img`
	width: max-content;
	align-self: center;
	margin-bottom: 18px;
`;

export const StyledCard = styled(Card)`
	align-self: center;
	margin: 30px 0;
	width: 95%;
	box-shadow: none !important;
	border-radius: 12px !important;
	overflow: visible !important;
	max-height: 130px;
	& * {
		color: ${(props) =>
			props.color
				? props.color
				: 'gray'} !important; //color de las letras, sera dinamico
	}
`;

export const CardBody = styled(CardContent)`
	background-color: ${(props) => (props.bgcolor ? props.bgcolor : 'gray')};
	padding-bottom: 0% !important;
	padding-top: 0% !important;
	max-height: 130px;
	border-radius: 12px;
`;

export const DrInfo = styled.div`
	display: flex;
	justify-content: space-between;
	max-height: 130px;
`;

export const TextWrapper = styled.div`
	font-size: 15px;
	width: 65%;
	margin-top: 10px;
	margin-left: 10px;
	padding-bottom: 10px !important;
`;

export const DrName = styled.h3`
	font-weight: bolder !important;
	margin-bottom: 10px;
`;
