import React, { useState, useRef, useEffect } from 'react';
import {
	Button,
	Checkbox,
	InputLabel,
	Select,
	MenuItem,
	FormControl
} from '@material-ui/core';
import Form, { FormTitle } from 'shared/form/Form.styled';
import Link from 'shared/link/Link.styled';
import TextField from 'shared/form/TextField.styled';
import axios from 'axios';
import {
	Container,
	formCustomStyles,
	FormInnerContainer,
	MedInsuranceField,
	TermsNConditionsCB
} from './Register.style';
import DatePicker from 'shared/datepicker/Datepicker';

export default function Register() {
	const [canSignUp, setCanSignUp] = useState(false);
	const [termsAccepted, setTermsAccepted] = useState(false);
	const [birthDate, setBirthDate] = useState(new Date());
	const [isDateValid, setIsDateValid] = useState(true);
	const [fields, setFields] = useState({
		name: {
			isErrored: null,
			errorMsg: null,
			value: ''
		},
		lastname: {
			isErrored: null,
			errorMsg: null,
			value: ''
		},
		idCard: {
			isErrored: null,
			errorMsg: null,
			value: ''
		},
		address: {
			isErrored: null,
			errorMsg: null,
			value: ''
		},
		medInsuranceNumber: {
			isErrored: null,
			errorMsg: null,
			value: ''
		},
		email: {
			isErrored: null,
			errorMsg: null,
			value: ''
		},
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
	const [userMedInsurance, setUserMedInsurance] = useState({
		number: '',
		company: ''
	});
	const medInsurances = useRef([
		'Primera ARS de Humano',
		'ARS SeNaSa',
		'Salud Dominicana',
		'ARS Universal',
		'Mapfre Salud ARS',
		'Medicard',
		'Ars Simag',
		'ARS Reservas',
		'ARS Plan Salud Banco Central',
		'ARS Futuro',
		'APS Asmar Planes de Salud',
		'BMI  Companies',
		'ARS Renacer',
		'ARS Semma',
		'ARS Monumental',
		'ARS GMA',
		'Administradora de Riesgos de Salud Yunén',
		'ARS-CMD, Colegio Médico Dominicano',
		'ARS MetaSalud',
		'ARS Asemap',
		'Telemed',
		'Bupa Dominicana, S.A.',
		'Pladent',
		'Serena Salud',
		'WorldWide Seguros',
		'Claria Internacional, SRL'
	]);

	useEffect(() => {
		let isOk = true;
		console.log(
			fields,
			'termsAccepted',
			termsAccepted,
			'isDateValid',
			isDateValid
		);
		for (let field in fields) {
			if (
				fields[field].isErrored === null ||
				fields[field].isErrored ||
				!termsAccepted ||
				!isDateValid
			) {
				isOk = false;
				break;
			}
		}
		setCanSignUp(isOk);
	}, [fields, termsAccepted, isDateValid]);

	const valdInput = async (fieldName = '', fieldValue = '') => {
		const valLength = fieldValue.length;
		const lettersOnlyErr = !/^[a-z ]+$/i.test(fieldValue);
		const numbersOnlyErr = !/^[0-9]+$/i.test(fieldValue);

		switch (fieldName) {
			case 'name':
			case 'lastname':
				let lengthErr = valLength < 3 || valLength > 29;
				let errRefersTo = fieldName === 'name' ? 'nombres' : 'apellidos';
				console.log(errRefersTo);
				return {
					isErrored: lengthErr || lettersOnlyErr,
					errMsg: lengthErr
						? `Los ${errRefersTo} deben tener entre 3-29 letras.`
						: lettersOnlyErr
						? `Los ${errRefersTo} solamente pueden contener letras.`
						: null
				};
			case 'idCard':
				let elevenCharsOnly = valLength !== 11;
				let containsDashes = fieldValue.search('-') !== -1;
				let isIdCardNonExistent = false;
				if (!elevenCharsOnly && !numbersOnlyErr) {
					const { data } = await axios.get(
						`http://api.adamix.net/apec/cedula/${fieldValue}`
					);
					isIdCardNonExistent = !data.ok;
				}
				return {
					isErrored: elevenCharsOnly || numbersOnlyErr || isIdCardNonExistent,
					errMsg: containsDashes
						? 'Recuerde no agregar guiones (-).'
						: numbersOnlyErr
						? 'Las cédulas solo pueden contener números.'
						: elevenCharsOnly
						? 'Las cédulas deben contener 11 dígitos.'
						: isIdCardNonExistent
						? 'La cédula que digitó no existe.'
						: null
				};
			case 'address':
				let between30n90chars = valLength < 30 || valLength > 90;
				return {
					isErrored: between30n90chars,
					errMsg: between30n90chars
						? 'Las direcciones deben tener entre 30-90 caracteres.'
						: null
				};
			case 'medInsuranceNumber':
				let sevenCharsOnly = valLength !== 7;
				return {
					isErrored: sevenCharsOnly || numbersOnlyErr,
					errMsg: numbersOnlyErr
						? 'Los números de afiliado solo pueden contener números.'
						: sevenCharsOnly
						? 'Los números de afiliado deben contener 7 números.'
						: null
				};
			case 'email':
				let isEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				let isNotAValidEmail = !isEmailRegex.test(
					String(fieldValue).toLowerCase()
				);
				return {
					isErrored: isNotAValidEmail,
					errMsg: isNotAValidEmail
						? 'Por favor introduzca un correo electrónico válido. Necesitará verificar que esta dirección le pertenece.'
						: null
				};
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

	const handleMedInsuranceCompanyChange = (evt) => {
		setUserMedInsurance((oldUserMedInsurance) => ({
			...oldUserMedInsurance,
			company: evt.target.value
		}));
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		console.log('canSignUp', canSignUp);
	};

	return (
		<Container>
			<Form customStyles={formCustomStyles} onSubmit={handleFormSubmit}>
				<FormTitle>Crea tu cuenta</FormTitle>
				<FormInnerContainer>
					<TextField
						fullWidth
						onChange={handleFieldChange}
						name="name"
						label="Nombres"
						error={fields['name'].isErrored}
						helperText={fields['name'].errMsg}
						value={fields['name'].value}
					/>
					<TextField
						fullWidth
						onChange={handleFieldChange}
						name="lastname"
						label="Apellidos"
						error={fields['lastname'].isErrored}
						helperText={fields['lastname'].errMsg}
						value={fields['lastname'].value}
					/>
					<TextField
						fullWidth
						onChange={handleFieldChange}
						type="text"
						name="idCard"
						label="Cédula"
						error={fields['idCard'].isErrored}
						helperText={fields['idCard'].errMsg}
						value={fields['idCard'].value}
					/>
					<TextField
						fullWidth
						onChange={handleFieldChange}
						name="address"
						label="Dirección"
						error={fields['address'].isErrored}
						helperText={fields['address'].errMsg}
						value={fields['address'].value}
					/>
					<DatePicker
						fullWidth
						onChange={(date) => {
							let isValid = true;
							if (date === null) {
								isValid = false;
							} else if (date.toString() === 'Invalid Date') {
								isValid = false;
							}
							setBirthDate(date);
							setIsDateValid(isValid);
						}}
						value={birthDate}
						name="birthDate"
						id="birthDate"
						label="Fecha de nacimiento"
						maxDate={new Date()}
						maxDateMessage="La fecha de nacimiento no puede ser mayor a la fecha actual."
					/>
					<MedInsuranceField>
						<h3>Seguro M&eacute;dico</h3>
						<FormControl>
							<InputLabel id="med-insurance" shrink>
								Compañía
							</InputLabel>
							<Select
								value={userMedInsurance.company}
								onChange={handleMedInsuranceCompanyChange}
								labelId="med-insurance"
							>
								{medInsurances.current.map((medInsurance, idx) => (
									<MenuItem key={idx} value={medInsurance}>
										{medInsurance}
									</MenuItem>
								))}
							</Select>
						</FormControl>
						<TextField
							onChange={handleFieldChange}
							name="medInsuranceNumber"
							label="Número de afiliado"
							InputLabelProps={{ shrink: true }}
							error={fields['medInsuranceNumber'].isErrored}
							helperText={fields['medInsuranceNumber'].errMsg}
							value={fields['medInsuranceNumber'].value}
						/>
					</MedInsuranceField>
					<TextField
						fullWidth
						onChange={handleFieldChange}
						name="email"
						label="Correo electrónico"
						type="email"
						error={fields['email'].isErrored}
						helperText={fields['email'].errMsg}
						value={fields['email'].value}
					/>
					<TextField
						fullWidth
						onChange={handleFieldChange}
						name="password"
						label="Contraseña"
						type="password"
						error={fields['password'].isErrored}
						helperText={fields['password'].errMsg}
						value={fields['password'].value}
					/>
					<TextField
						fullWidth
						onChange={handleFieldChange}
						name="confirm-password"
						label="Confirmar Contraseña"
						type="password"
						error={fields['confirm-password'].isErrored}
						helperText={fields['confirm-password'].errMsg}
						value={fields['confirm-password'].value}
					/>
					<TermsNConditionsCB
						control={<Checkbox color="primary" name="termsCb" />}
						label="Aceptar Términos y Condiciones"
						onChange={(e) => setTermsAccepted(e.target.checked)}
					/>
					<Button
						fullWidth
						color="primary"
						variant="contained"
						disableElevation
						type="submit"
						style={{ borderRadius: '35px' }}
						disabled={!canSignUp}
					>
						Registrarse
					</Button>
					<Link to="/login">Iniciar sesi&oacute;n</Link>
				</FormInnerContainer>
			</Form>
		</Container>
	);
}
