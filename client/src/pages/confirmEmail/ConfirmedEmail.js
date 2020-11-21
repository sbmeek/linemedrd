import React, { useEffect } from 'react';
import {
	Container,
	StyledCard,
	CardBody,
	CardTitle,
	BtnAccept,
	CardActionsStyled
} from './ConfirmedEmail.style';
import { Typography } from '@material-ui/core';

export default function ConfirmEmail() {
	useEffect(() => {
		document.title = 'Confirmación';
	});

	return (
		<Container>
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
		</Container>
	);
}
