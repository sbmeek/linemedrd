import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import {
	Container,
	StyledCard,
	CardBody,
	CardTitle,
	BtnAccept,
	CardActionsStyled
} from './ConfirmEmail.style';
import { Typography } from '@material-ui/core';
import axios from 'axios';
import Loader from 'components/loader/Loader';

export default function ConfirmEmail({
	match: {
		params: { token }
	}
}) {
	const [isVerificationTokenOk, setIsVerificationTokenOk] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		document.title = 'Verificar: Correo Electrónico';
	}, []);

	useEffect(() => {
		let encToken = decodeURIComponent(token);

		(async () => {
			const { data } = await axios.post('/user/verify-email-conf-code', {
				encToken
			});
			setIsVerificationTokenOk(data.ok);
			setIsLoading(false);
		})();
	}, [token]);

	return (
		<Container>
			{isLoading ? (
				<Loader />
			) : !isVerificationTokenOk ? (
				<Redirect to="/" />
			) : (
				<StyledCard>
					<CardBody>
						<CardTitle>Sus datos han sido confirmados</CardTitle>
						<Typography variant="body2" component="p">
							Ya tiene acceso a nuestra plataforma. Inicie sesi&oacute;n para
							continuar.
						</Typography>
						<CardActionsStyled>
							<BtnAccept
								fullWidth
								variant="contained"
								disableElevation
								href="/login"
							>
								Ir al Inicio de sesi&oacute;n
							</BtnAccept>
						</CardActionsStyled>
					</CardBody>
				</StyledCard>
			)}
		</Container>
	);
}
