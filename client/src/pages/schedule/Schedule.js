import React, { useState } from 'react';
import {
	Container,
	Title,
	ImgStyle,
	StyledCard,
	CardBody,
	TextWrapper,
	PatName
} from './Schedule.style';
import { makeStyles, Paper, Tabs, Tab } from '@material-ui/core';
import agenda from 'assets/icons/agenda.svg';
import heart from 'assets/icons/cardiogram.svg';
/* import Pending from 'assets/icons/pending.svg';
import Clipboard from 'assets/icons/clipboard.svg';
import Check from 'assets/icons/check-mark.svg'; */

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		maxWidth: 500
	}
});

export default function Schedule() {
	const classes = useStyles();
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Container>
			<ImgStyle src={agenda} />
			<Title>Agenda</Title>
			<Paper square className={classes.root}>
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor="primary"
					textColor="primary"
					variant="fullWidth"
				>
					<Tab label="Próximas" color="#66d2bc" />
					<Tab label="Pendientes" color="#EE3A3A" />
					<Tab label="Realizadas" color="gray" />
				</Tabs>
				<StyledCard color="#005e4b">
					<CardBody bgcolor="#85f2dc">
						<TextWrapper>
							<PatName>Alexandra Tudela</PatName>
							Numero: (829) 162-1311 <br />
							Cedula: 001-2346543-2 <br />
							Email: alexa01@gmail.com
						</TextWrapper>
						<ImgStyle src={heart} />
						<TextWrapper>
							Lunes 18 de noviembre del año 2020 a las 7:00pm
						</TextWrapper>
					</CardBody>
				</StyledCard>
			</Paper>
		</Container>
	);
}
