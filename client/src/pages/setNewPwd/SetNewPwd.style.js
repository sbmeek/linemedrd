import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const Container = styled.div`
	display: grid;
	place-items: center;
	width: 100%;
`;

export const FormInnerContainer = styled.div`
	display: grid;
	place-items: center;
	overflow-y: auto;
	width: 80%;
	padding: 0 20px;

	& > p {
		color: var(--lmed-green-03);
	}
`;

export const SendBtn = styled(Button)`
	border-radius: 25px !important;
	margin-top: 50px !important;
	width: 70%;
	& * {
		color: white;
	}
`;
