import { useState } from 'react';
import { CheckboxContainer } from './FormSignup.styles';
import Submit from 'shared/submit/Submit';
import { appName } from 'constants/index';
import Link from 'shared/link/Link';
import { ContentInput, Wrapper, InputWrapper } from 'shared/input/Input';

const FormSignup = () => {
	const [userSignup, setUserSignup] = useState({
		name: { value: '', placeholder: 'Ingresar Username' },
		email: { value: '', placeholder: 'Ingresar Email' },
		password: { value: '', placeholder: 'Ingresar username' }
	});

	const handleChange = e => {
		setUserSignup({
			...userSignup,
			[e.target.name]: {
				value: e.target.value,
				placeholder: userSignup[e.target.name].placeholder
			}
		});
	};

	return (
		<form>
			<ContentInput>
				<Wrapper>
					<InputWrapper
						{...{ text: userSignup.name }}
						type="text"
						name="name"
						aria-label="Ingresar username"
						aria-required="true"
						id="signup-username"
						onChange={handleChange}
						required
					></InputWrapper>
				</Wrapper>
			</ContentInput>

			<CheckboxContainer htmlFor="polity">
				<input type="checkbox" name="polity" id="polity" />

				<span>
					Declaro que soy mayor de edad y acepto el{' '}
					<Link to="#">Aviso de privacidad</Link> y los{' '}
					<Link to="#">Términos y condiciones</Link> de uso de {appName}.
				</span>
			</CheckboxContainer>
			<Submit type="submit">Regístrate</Submit>
		</form>
	);
};

export default FormSignup;
