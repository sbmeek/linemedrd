import React, { useEffect } from 'react';
import { CardMedia, Typography, Checkbox, makeStyles } from '@material-ui/core';
import {
	CardTitle,
	Container,
	InsuranceCB,
	StyledCard,
	CardBody,
	BtnCancel,
	BtnAccept,
	CardActionsStyled
} from './regAppoint.style';
import TextField from 'shared/form/TextField.styled';
import Doctor from 'assets/icons/doctor-default-profile.svg';

const useStyles = makeStyles({
	media: {
		height: 115,
		width: '33%',
		marginLeft: '33%'
	}
});

export default function RegAppoint() {
	const classes = useStyles();

	useEffect(() => {
		document.title = 'Registrar Cita';
	}, []);

	return (
		<Container>
			<StyledCard>
				<CardMedia
					className={classes.media}
					component="img"
					alt="Doctor profile"
					width="100"
					height="200"
					image={Doctor}
					title="Doctor profile"
				/>
				<CardBody>
					<CardTitle>Reservar Cita</CardTitle>
					<Typography variant="body2" component="p">
						Doctor: <br />
						Consultorio: <br />
						Direccion: <br />
						Costo:
						<br />
					</Typography>

					<TextField
						fullWidth
						type="date"
						name="birthDate"
						label="Fecha de nacimiento"
						InputLabelProps={{ shrink: true }}
					/>

					<InsuranceCB
						control={<Checkbox color="primary" name="insuranceCB" />}
						label="Seguro Médico"
					/>

					<CardActionsStyled>
						<BtnCancel variant="contained" color="secondary">
							Cancelar
						</BtnCancel>
						<BtnAccept variant="contained">Confimar</BtnAccept>
					</CardActionsStyled>
				</CardBody>
			</StyledCard>
		</Container>
	);
}
