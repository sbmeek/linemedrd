import styled from 'styled-components';
import { Card, CardContent, Paper, Tabs, Tab, Button } from '@material-ui/core';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	overflow-y: auto;
	align-items: center;

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
		color: white;
	}
`;

export const CardBody = styled(CardContent)`
	display: flex;
	background-color: ${(props) => (props.bgcolor ? props.bgcolor : 'gray')};
	padding-bottom: 12px !important;
	padding-top: 0px !important;
`;

export const IconWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100%;
	width: 30%;
`;

export const IconStyle = styled.img`
	width: 80px;
	height: auto;
`;

export const TextWrapper = styled.div`
	font-size: 15px;
	width: 70%;
	margin-top: 20px;
	margin-left: 10px;
`;

export const PatName = styled.h3`
	font-weight: bolder !important;
	color: white !important;
	margin-bottom: 10px;
`;

export const StyPaper = styled(Paper)`
	max-width: 380px !important;
	box-shadow: none !important;
`;

export const StyTabs = styled(Tabs)`
	& span.PrivateTabIndicator-root-1 {
		background-color: ${(props) =>
			props.value === 0
				? '#66d2bc'
				: props.value === 1
				? '#EE3A3A'
				: props.value === 2
				? 'gray'
				: 'black'} !important;
	}
`;

export const StyTab = styled(Tab)`
	min-width: 125px !important;
	& span {
		color: ${(props) => (props.color ? props.color : 'gray')} !important;
	}
`;

export const BtnCancel = styled(Button)`
	border-radius: 25px !important;
	margin-right: 10px !important;
	background-color: var(--lmed-red-01) !important;
	& * {
		color: #ffff !important;
	}
`;

export const BtnAccept = styled(Button)`
	border-radius: 25px !important;
	background-color: #ffff !important;
	& * {
		color: var(--lmed-black-00) !important;
	}
`;
