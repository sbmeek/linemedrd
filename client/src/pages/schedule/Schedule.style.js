import styled from 'styled-components';
import { Card, CardContent } from '@material-ui/core';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	overflow-y: auto;

	& svg {
		width: 20%;
		align-self: center;
	}
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
`;

export const StyledCard = styled(Card)`
	align-self: center;
	margin: 2%;
	width: 95%;
	box-shadow: none !important;
	border-radius: 12px !important;
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
`;

export const TextWrapper = styled.div`
	font-size: 15px;
	width: 65%;
	margin-top: 20px;
	margin-left: 10px;
`;

export const PatName = styled.h3`
	font-weight: bolder !important;
	color: ${(props) => (props.color ? props.color : '#005e4b')} !important;
	margin-bottom: 10px;
`;
