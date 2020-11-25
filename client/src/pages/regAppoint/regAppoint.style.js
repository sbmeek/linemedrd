import styled from 'styled-components';
import {
	Button,
	Card,
	CardContent,
	CardActions,
	FormControlLabel
} from '@material-ui/core';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	place-items: center;
	width: 100%;
	margin-top: -20px;
	overflow-y: auto;

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

export const CardTitle = styled.h1`
	font-family: NunitoExtraBold;
	text-align: center;
`;

export const ImgStyle = styled.img`
	width: 115px;
	align-self: center;
`;

export const InsuranceCB = styled(FormControlLabel)`
	justify-content: flex-start;
	width: 100%;
`;

export const StyledCard = styled(Card)`
	box-shadow: none !important;
	overflow: visible !important;
`;

export const CardBody = styled(CardContent)`
	background-color: var(--lmed-green-01);
	padding: 9px 15px !important;
	width: 92%;
	margin-left: 4.5%;
	border: 0;
	border-radius: 25px;
	& * {
		color: var(--lmed-green-03) !important;
	}
`;

export const CardActionsStyled = styled(CardActions)`
	justify-content: center;
`;

export const BtnCancel = styled(Button)`
	border-radius: 25px !important;
	background-color: var(--lmed-red-00) !important;
	& * {
		color: #ffff !important;
	}
`;

export const BtnAccept = styled(Button)`
	border-radius: 25px !important;
	background-color: #ffff !important;
	color: var(--lmed-green-01);
`;
