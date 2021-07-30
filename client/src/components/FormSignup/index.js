import styled from '@emotion/styled';

const FormSignup = () => {
	return (
		<form>
			<div>
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
			</div>

			<div>
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
			</div>
			<div>
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
			</div>
			<label>
				<input type="checkbox" name="polity" />
				Declaro que soy mayor de edad y acepto el
				<a href="#?">Aviso de privacidad</a> y los
				<a>Términos y condiciones</a> de uso de Concitmed.
			</label>
			<button type="submit">Regístrate</button>
		</form>
	);
};

export default FormSignup;
