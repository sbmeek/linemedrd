import React, { useEffect, useState } from 'react';
import { Container, SendBtn, FormInnerContainer } from './RecPwd.style';
import Form, { FormTitle } from 'shared/form/Form.styled';
import TextField from 'shared/form/TextField.styled';
import axios from 'axios';

export default function RecPwd() {
	const [email, setEmail] = useState('');
	const [errMsg, setErrMsg] = useState('');
	const [isEmailValid, setIsEmailValid] = useState(null);
	const [showEmailSent, setShowEmailSent] = useState(false);
	const [canSubmit, setCanSubmit] = useState(false);

	useEffect(() => {
		document.title = 'Recuperación de Contraseña';
	}, []);

	const handleChange = (e) => {
		const { value } = e.target;
		let isEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		let isAValidEmail = isEmailRegex.test(String(value).toLowerCase());
		setIsEmailValid(isAValidEmail);
		setEmail(value);
		setErrMsg(isAValidEmail ? '' : 'Debe digitar un correo electrónico válido.');
		setCanSubmit(value.length !== 0 && isAValidEmail);
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		if (canSubmit) {
			const { data } = await axios.post('/user/recover-pwd/request', { email });
			if (data.userNonExistent) {
				setErrMsg('Este correo electrónico no está registrado.');
				setIsEmailValid(false);
				setCanSubmit(false);
			}
			else if (data.ok){
				setShowEmailSent(true);
			}
		}
	};

	return (
		<Container>
			{showEmailSent ? (
				<EmailSent />
			) : (
				<Form onSubmit={handleFormSubmit}>
					<FormTitle style={{ marginBottom: 35 }}>
						Recuperar Contraseña
					</FormTitle>
					<FormInnerContainer>
						<p>Te enviaremos un correo para confirmar que es tu cuenta.</p>
						<TextField
							fullWidth
							name="email"
							label="Correo electrónico"
							type="email"
							onChange={handleChange}
							error={isEmailValid === null ? false : !isEmailValid}
							helperText={errMsg}
							defaultValue={email}
						/>
						<SendBtn
							color="primary"
							variant="contained"
							disableElevation
							type="submit"
							disabled={!canSubmit}
						>
							Enviar
						</SendBtn>
					</FormInnerContainer>
				</Form>
			)}
		</Container>
	);
}

const EmailSent = () => {
	return (
		<Container>
			<FormInnerContainer>
				<p>
					Chequea tu correo electronico, te hemos enviado un mensaje con el link
					de acceso, por favor revisa y entra para poder continuar con el
					proceso de recuperar contraseña.
				</p>
				<SendBtn
					color="primary"
					variant="contained"
					disableElevation
					href="/login"
				>
					Volver
				</SendBtn>
			</FormInnerContainer>
		</Container>
	);
};
