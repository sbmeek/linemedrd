import React from 'react';
import Form, { FormTitle } from 'shared/form/Form.styled';
import Link from 'shared/link/Link.styled';
import { Container } from './Register.style';

export default function Register() {
	return (
		<Container>
			<Form>
				<FormTitle>Crea tu cuenta</FormTitle>
				<Link to="/login">Iniciar sesi&oacute;n</Link>
			</Form>
		</Container>
	);
}
