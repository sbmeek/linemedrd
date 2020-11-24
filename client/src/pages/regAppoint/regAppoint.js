import React, { useEffect, useState } from 'react';
import { Typography, Checkbox } from '@material-ui/core';
import {
	CardTitle,
	Container,
	InsuranceCB,
	StyledCard,
	CardBody,
	BtnCancel,
	BtnAccept,
	CardActionsStyled,
	ImgStyle
} from './RegAppoint.style';
import Doctor from 'assets/icons/dr.svg';
import Datepicker from 'shared/datepicker/Datepicker';
import { useLocation } from 'react-router-dom';

export default function RegAppoint() {
	const [dr, setDr] = useState({});
	const [cost, setCost] = useState(3000);
	const location = useLocation();

	useEffect(() => {
		document.title = 'Registrar Cita';
	}, []);

	useEffect(() => {
		setDr(location.state);
	}, [location.state]);

	return (
		<Container>
			<ImgStyle src={Doctor} />
			<StyledCard>
				<CardBody>
					<CardTitle>Reservar Cita</CardTitle>
					<Typography variant="body2" component="p">
						Doctor: {dr['name']} <br />
						Consultorio: {dr['Cons_name']} <br />
						Direccion: {dr['Cons_dir']} <br />
						Costo: RD${cost}
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
						onChange={(e) => setCost(!e.target.checked ? 3000 : 950)}
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
