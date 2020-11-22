import React, { useState, useContext } from 'react';
import axios from 'axios';
import { MainContext, actionTypes } from 'global/context';
import Form, { FormTitle } from 'shared/form/Form.styled';
import TextField from 'shared/form/TextField.styled';
import Link from 'shared/link/Link.styled';
import {
	Container,
	FormInnerContainer,
	InitBtn,
	ForgetLink,
	ErrorMsg,
	formCustomStyles
} from './Login.style';

export default function Login() {
	const [fields, setFields] = useState({});
	const [errMsg, setErrMsg] = useState('');
	const { dispatch } = useContext(MainContext);

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		const { data } = await axios.post(
			`/user/login?email=${fields['email']}&password=${fields['password']}`,
			fields
		);
		if (data.emailNotConfirmed) {
			setErrMsg('Debe confirmar su correo electrónico antes de ingresar.');
		} else if (!data.ok) {
			setErrMsg('Credenciales incorrectas. Intente de nuevo.');
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
		setErrMsg('');
	};

	return (
		<Container>
			<Form customStyles={formCustomStyles} onSubmit={handleFormSubmit}>
				<FormTitle>Iniciar Sesi&oacute;n</FormTitle>
				<FormInnerContainer>
					<ErrorMsg show={errMsg.length !== 0}>{errMsg}</ErrorMsg>
					<TextField
						fullWidth
						onChange={handleFieldChange}
						name="email"
						label="Correo Electronico"
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
