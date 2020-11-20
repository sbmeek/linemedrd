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
} from './RegAppoint.style';
import Doctor from 'assets/icons/doctor-default-profile.svg';
import Datepicker from 'shared/datepicker/Datepicker';

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

					<Datepicker
						id="dateAppoint"
						label="Fecha de Cita"
						minDate={new Date()}
					/>

					<InsuranceCB
						control={<Checkbox color="primary" name="insuranceCB" />}
						label="Seguro Médico"
					/>

					<CardActionsStyled>
						<BtnCancel variant="contained">Cancelar</BtnCancel>
						<BtnAccept variant="contained">Confimar</BtnAccept>
					</CardActionsStyled>
				</CardBody>
			</StyledCard>
		</Container>
	);
}
