import React, { useEffect, useState } from 'react';
import { Container, SendBtn, FormInnerContainer } from './SetNewPwd.style';
import Form, { FormTitle } from 'shared/form/Form.styled';
import TextField from 'shared/form/TextField.styled';

export default function SetNewPwd({ match: { params } }) {
	const [canSubmit, setCanSubmit] = useState(false);
	console.log(params);
	const [fields, setFields] = useState({
		password: {
			isErrored: null,
			errorMsg: null,
			value: ''
		},
		'confirm-password': {
			isErrored: null,
			errorMsg: null,
			value: ''
		}
	});

	const handleFieldChange = async (e) => {
		const { name, value } = e.target;
		const { isErrored, errMsg } = await valdInput(name, value);
		setFields((oldFields) => ({
			...oldFields,
			[name]: {
				isErrored,
				errMsg,
				value
			}
		}));
	};

	const valdInput = async (fieldName = '', fieldValue = '') => {
		switch (fieldName) {
			case 'password':
				let moreThan8Chars = fieldValue.length < 6;
				return {
					isErrored: moreThan8Chars,
					errMsg: moreThan8Chars
						? 'Las contraseñas deben tener 6 o más dígitos.'
						: null
				};
			case 'confirm-password':
				let passwordsMustMatch = fields['password'].value !== fieldValue;
				return {
					isErrored: passwordsMustMatch,
					errMsg: passwordsMustMatch ? 'Las contraseñas no coinciden.' : null
				};
			default:
				return {
					isErrored: false,
					errMsg: null
				};
		}
	};

	useEffect(() => {
		let isOk = true;
		for (let field in fields) {
			if (fields[field].isErrored === null || fields[field].isErrored) {
				isOk = false;
				break;
			}
		}
		setCanSubmit(isOk);
	}, [fields]);

	useEffect(() => {
		document.title = 'Nueva Contraseña';
	}, []);

	return (
		<Container>
			<Form>
				<FormTitle style={{ marginBottom: 35 }}>Nueva Contraseña</FormTitle>
				<FormInnerContainer>
					<p> Especifica una nueva Contraseña para tu cuenta </p>
					<TextField
						fullWidth
						name="password"
						label="Nueva Contraseña"
						type="password"
						onChange={handleFieldChange}
						error={fields['password'].isErrored}
						helperText={fields['password'].errMsg}
						defaultValue={fields['password'].value}
					/>
					<TextField
						fullWidth
						name="confirm-password"
						label="Confirma Contraseña"
						type="password"
						onChange={handleFieldChange}
						error={fields['confirm-password'].isErrored}
						helperText={fields['confirm-password'].errMsg}
						defaultValue={fields['confirm-password'].value}
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
		</Container>
	);
}
