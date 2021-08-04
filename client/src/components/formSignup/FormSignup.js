import { appName } from '@/constants';
import { ContentInput, CheckboxContainer, Submit } from './FormSignup.styles';

const FormSignup = () => {
	return (
		<form>
			<ContentInput>
				<label htmlFor="signup-name">Nombre de usuario</label>
				<input
					type="text"
					name="signupName"
					aria-label="Ingresar nombre de usuario"
					placeholder="Ingresar nombre de usuario"
					aria-required="true"
					id="signup-name"
					required
				/>
			</ContentInput>

			<ContentInput>
				<label htmlFor="signup-email">Correo electrónico</label>
				<input
					type="text"
					name="signupEmail"
					aria-label="Ingresar correo electrónico"
					placeholder="Ingresar correo electrónico"
					aria-required="true"
					id="signup-email"
					required
				/>
			</ContentInput>
			<ContentInput>
				<label htmlFor="signup-password">Contraseña</label>
				<input
					type="text"
					name="signupPassword"
					aria-label="Ingresar contraseña"
					placeholder="Ingresar contraseña"
					aria-required="true"
					id="signup-password"
					required
				/>
			</ContentInput>
			<CheckboxContainer>
				<input type="checkbox" name="polity" />
				<label>
					Declaro que soy mayor de edad y acepto el{' '}
					<a href="#?">Aviso de privacidad</a> y los{' '}
					<a href="#?">Términos y condiciones</a> de uso de {appName}.
				</label>
			</CheckboxContainer>
			<Submit type="submit">Regístrate</Submit>
		</form>
	);
};

export default FormSignup;
