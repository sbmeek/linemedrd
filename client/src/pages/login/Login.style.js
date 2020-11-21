import styled from 'styled-components';
import { Button } from '@material-ui/core';
import Link from 'shared/link/Link.styled';

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
`;

export const InitBtn = styled(Button)`
	border-radius: 25px !important;
	margin-top: 50px !important;
	width: 70%;
	background-color: var(--lmed-green-02) !important;
	& * {
		color: white;
	}
`;

export const ForgetLink = styled(Link)`
	width: 100%;
`;
