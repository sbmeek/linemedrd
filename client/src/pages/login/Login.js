import React, { useState, useContext } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Form } from './Login.style';
import axios from 'axios';
import { MainContext, actionTypes } from 'global/context';

export default function Login() {
	const [fields, setFields] = useState({});
	const { dispatch } = useContext(MainContext);

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
			<h2>Iniciar Sesi&oacute;n</h2>
			<TextField
				onChange={handleFieldChange}
				name="email"
				label="Correo electrónico"
				type="email"
			/>
			<TextField
				onChange={handleFieldChange}
				name="password"
				label="Contraseña"
				type="password"
			/>
			<Button type="submit">Submit</Button>
		</Form>
	);
}
