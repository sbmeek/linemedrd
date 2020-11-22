import styled, { keyframes } from 'styled-components';
import { Card, CardContent, CardActions } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	display: grid;
	place-items: center;
	width: 100%;
`;

export const CardTitle = styled.h1`
	font-family: NunitoExtraBold;
	text-align: center;
`;

const opacityAnim = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;

export const StyledCard = styled(Card)`
	max-width: 345;
	box-shadow: none !important;
	animation: ${opacityAnim} 200ms;
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
	justify-content: right !important;
	align-items: flex-end !important;
	margin-top: 20px;
`;

export const BtnAccept = styled(Link)`
	display: grid;
	place-content: center;
	width: 100%;
	height: 40px;
	border-radius: 25px;
	background-color: #fff;
	color: var(--lmed-green-01);
	text-transform: uppercase;
	text-decoration: none;
`;
