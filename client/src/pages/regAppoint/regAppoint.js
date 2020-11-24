import React, { useEffect, useState, useContext } from 'react';
import {
	Typography,
	Checkbox,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Button
} from '@material-ui/core';
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
import Form from 'shared/form/Form.styled';
import Datepicker from 'shared/datepicker/Datepicker';
import { useLocation, useHistory } from 'react-router-dom';
import { MainContext } from 'global/context';
import axios from 'axios';

export default function RegAppoint() {
	const [dr, setDr] = useState({});
	const history = useHistory();
	const [checked, setChecked] = useState(false);
	const [openDiag, setOpenDiag] = useState(false);
	const [date, setDate] = useState(new Date());
	const { user } = useContext(MainContext).state;
	const [cost, setCost] = useState(3000);
	const location = useLocation();

	const handleClickOpen = () => {
		setOpenDiag(true);
	};

	const handleClose = () => {
		setOpenDiag(false);
		history.push('/');
	};

	const handleCancel = () => {
		history.push('/');
	};

	useEffect(() => {
		document.title = 'Registrar Cita';
	}, []);

	useEffect(() => {
		setDr(location.state);
	}, [location.state]);

	const handledFormSubmit = async (e) => {
		e.preventDefault();
		let newAppoint = {
			ID_User: user['_id'],
			ID_Doctor: dr['_id'],
			ID_Consult: dr['ID_Consult'],
			emission_date: new Date(),
			realization_date: date,
			payment: cost,
			ins_validation: checked
		};
		let { data } = await axios.post('/appoints/createAppoint', newAppoint);
		if (data['ok']) handleClickOpen();
	};

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

					<Form onSubmit={handledFormSubmit}>
						<Datepicker
							id="dateAppoint"
							label="Fecha de Cita"
							minDate={new Date()}
							value={date}
							onChange={(d) => setDate(d)}
						/>

						<InsuranceCB
							control={<Checkbox color="primary" name="insuranceCB" />}
							label="Seguro Médico"
							onChange={(e) => {
								setCost(!e.target.checked ? 3000 : 950);
								setChecked(e.target.checked);
							}}
						/>

						<CardActionsStyled>
							<BtnCancel variant="contained" onChange={handleCancel}>
								Cancelar
							</BtnCancel>
							<BtnAccept variant="contained" type="submit">
								Confimar
							</BtnAccept>
						</CardActionsStyled>
					</Form>
				</CardBody>
			</StyledCard>
			<Dialog
				open={openDiag}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{'Su Cita ha sido registrada con éxito'}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Su petición de cita ha sido enviada al consultorio correspondiente,
						dentro de unas horas se le dará una respuesta, manténgase atento a
						su bandeja de citas reservadas.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary" autoFocus>
						Entendido
					</Button>
				</DialogActions>
			</Dialog>
		</Container>
	);
}
