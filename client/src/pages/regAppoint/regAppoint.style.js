import styled from 'styled-components';
import {
	Button,
	Card,
	CardContent,
	CardActions,
	CardMedia,
	FormControlLabel
} from '@material-ui/core';

export const Container = styled.div`
	display: grid;
	place-items: center;
	width: 100%;
`;

export const CardTitle = styled.h1`
	font-family: NunitoExtraBold;
	text-align: center;
`;

export const MediaCard = styled(CardMedia)`
	height: 50px;
	width: 33%;
	margin-left: 33%;
`;

export const InsuranceCB = styled(FormControlLabel)`
	justify-content: flex-start;
	width: 100%;
`;

export const StyledCard = styled(Card)`
	max-width: 345;
	box-shadow: none !important;
`;

export const CardBody = styled(CardContent)`
	background-color: var(--lmed-green-01);
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