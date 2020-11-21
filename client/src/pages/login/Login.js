import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { MainContext, actionTypes } from 'global/context';
import Form, { FormTitle } from 'shared/form/Form.styled';
import TextField from 'shared/form/TextField.styled';
import Link from 'shared/link/Link.styled';
import {
	Container,
	FormInnerContainer,
	InitBtn,
	ForgetLink
} from './Login.style';

export default function Login() {
	const [fields, setFields] = useState({});
	const { dispatch } = useContext(MainContext);

	useEffect(() => {
		document.title = 'Iniciar Sesión';
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
		<Container>
			<FormTitle style={{ marginTop: -150 }}>Iniciar Sesi&oacute;n</FormTitle>
			<Form onSubmit={handleFormSubmit}>
				<FormInnerContainer style={{ marginTop: -230 }}>
					<TextField
						fullWidth
						onChange={handleFieldChange}
						name="email"
						label="Nombre o Email"
						type="text"
					/>
					<TextField
						fullWidth
						onChange={handleFieldChange}
						name="password"
						label="Contraseña"
						type="password"
					/>
					<ForgetLink to="/recoverpwd">¿Olvidaste tu contraseña?</ForgetLink>
					<br />
					<InitBtn variant="contained" disableElevation type="submit">
						Iniciar
					</InitBtn>
					<Link to="/register">Registrarse</Link>
				</FormInnerContainer>
			</Form>
		</Container>
	);
}
