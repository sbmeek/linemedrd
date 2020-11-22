import React, { useEffect, useState } from 'react';
import { Container, SendBtn, FormInnerContainer } from './RecPwd.style';
import Form, { FormTitle } from 'shared/form/Form.styled';
import TextField from 'shared/form/TextField.styled';

export default function RecPwd() {
	const [showEmailSent, setShowEmailSent] = useState(false);
	const [canSubmit, setCanSubmit] = useState(false);

	const handleChange = (e) => {
		const { value } = e.target;
		if (value) {
			setCanSubmit(true);
		}
	};

	useEffect(() => {
		document.title = 'Recuperacion de Contraseña';
	}, []);

	return (
		<Container>
			{showEmailSent ? (
				<EmailSent />
			) : (
				<Form>
					<FormTitle style={{ marginBottom: 35 }}>
						Recuperar Contraseña
					</FormTitle>
					<FormInnerContainer>
						<p> Te enviaremos un correo para confirmar que es tu cuenta. </p>
						<TextField
							fullWidth
							name="email"
							label="Correo Electronico"
							type="email"
							onChange={handleChange}
						/>
						<SendBtn
							color="primary"
							variant="contained"
							disableElevation
							type="submit"
							onMouseDown={() => setShowEmailSent(true)}
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
