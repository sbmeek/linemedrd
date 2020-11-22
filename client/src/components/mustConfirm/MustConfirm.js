import React, { useEffect } from 'react';
import {
	Container,
	CardTitle,
	CardBody,
	CardActionsStyled,
	BtnAccept,
	StyledCard
} from './MustConfirm.style';
import { Typography } from '@material-ui/core';

export default function MustConfirm() {
	useEffect(() => {
		document.title = 'Confirme sus datos';
	}, []);

	return (
		<Container>
			<StyledCard>
				<CardBody>
					<CardTitle style={{ marginBottom: 20 }}>
						Confirmar Correo Electr&oacute;nico
					</CardTitle>
					<Typography component="h4">Sus datos han sido registrados</Typography>
					<Typography variant="body2" component="p">
						Por favor entre a su correo electr&oacute;nico y valide su cuenta
						haciendo click en el enlace que le hemos env&iacute;ado.
					</Typography>
					<CardActionsStyled>
						<BtnAccept to="/login">Entendido</BtnAccept>
					</CardActionsStyled>
				</CardBody>
			</StyledCard>
		</Container>
	);
}
