import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import 'date-fns';
import esLocale from 'date-fns/locale/es';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker
} from '@material-ui/pickers';
import styled from 'styled-components';

const DatePicker = styled(KeyboardDatePicker)`
	& .MuiInput-underline:before {
		border-bottom: 1px solid var(--lmed-green-00);
	}
`;

export default function Datepicker(props) {
	const [date, setDate] = useState();

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
			<Grid container justify="space-around">
				<DatePicker
					margin="normal"
					format="dd/MM/yyyy"
					KeyboardButtonProps={{
						'aria-label': 'change date'
					}}
					invalidDateMessage="Fecha inválida"
					cancelLabel="Cancelar"
					value={date}
					onChange={(newDate) => setDate(newDate)}
					{...props}
				/>
			</Grid>
		</MuiPickersUtilsProvider>
	);
}
