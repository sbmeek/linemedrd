import { Anclaje, Input, Link, Submit } from './FormLogin.styles';

const FormLogin = () => {
	return (
		<form>
			<div>
				<Input
					type="text"
					name="name"
					placeholder="Ingresar correo electrónico o nombre de usuario"
					aria-label="Ingresar nombre de usuario o correo"
					aria-required="true"
					required
				/>
			</div>
			<div>
				<Input
					type="password"
					name="password"
					placeholder="Ingresar Contraseña"
					aria-label="Ingresar nombre de usuario o correo"
					aria-required="true"
					required
				/>
			</div>
			<Link>
				<Anclaje href="#?	">¿Olvidaste la contraseña?</Anclaje>
			</Link>
			<Submit type="submit" aria-label="Iniciar Sesión">
				Iniciar Sesión
			</Submit>
		</form>
	);
};

export default FormLogin;
