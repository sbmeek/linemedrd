import React, { useState, useContext, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import axios from 'axios';
import { MainContext, actionTypes } from 'global/context';
import Form, { FormTitle } from 'shared/form/Form.styled';
import Link from 'shared/link/Link.styled';

export default function Login() {
	const [fields, setFields] = useState({});
	const { dispatch } = useContext(MainContext);

	useEffect(() => {
		document.title = 'Unauth Route';
	}, []);

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		const { data } = await axios.post(
			`/user/login?email=${fields['email']}&password=${fields['password']}`,
			fields
		);
		if (data.emailNotConfirmed) {
			//credeciales correctas pero email no confirmado
		} else if (!data.ok) {
			//credenciales incorrectas
		} else {
			dispatch({
				type: actionTypes.SET_IS_AUTHENTICATED,
				payload: {
					isAuthenticated: data.isAuthenticated
				}
			});
			dispatch({
				type: actionTypes.SET_USER,
				payload: {
					user: data.user
				}
			});
		}
		console.log(data);
	};

	const handleFieldChange = (e) => {
		setFields((oldFields) => ({
			...oldFields,
			[e.target.name]: e.target.value
		}));
	};

	return (
		<Form onSubmit={handleFormSubmit}>
			<FormTitle>Iniciar Sesi&oacute;n</FormTitle>
			<TextField
				onChange={handleFieldChange}
				name="email"
				label="Correo electrónico"
				InputLabelProps={{ fontFamily: 'NunitoBold' }}
				type="email"
			/>
			<TextField
				onChange={handleFieldChange}
				name="password"
				label="Contraseña"
				InputLabelProps={{ fontFamily: 'NunitoBold' }}
				type="password"
			/>
			<Button
				fullWidth
				color="primary"
				variant="contained"
				disableElevation
				type="submit"
			>
				Iniciar
			</Button>
			<Link to="/register">Registro</Link>
		</Form>
	);
}
