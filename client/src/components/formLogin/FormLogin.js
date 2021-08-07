import Link, { ContentLink } from '@/shared/link/Link';
import Submit from '@/shared/submit/Submit';
import ContentInput from '@/shared/inputForm/InputForm';

const FormLogin = () => {
	const align = {
		left: true
	};

	return (
		<form>
			<ContentInput>
				<input
					type="text"
					name="name"
					placeholder="Ingresar correo electrónico o nombre de usuario"
					aria-label="Ingresar nombre de usuario o correo"
					aria-required="true"
					required
				/>
			</ContentInput>
			<ContentInput>
				<input
					type="password"
					name="password"
					placeholder="Ingresar Contraseña"
					aria-label="Ingresar nombre de usuario o correo"
					aria-required="true"
					required
				/>
			</ContentInput>
			<ContentLink {...align}>
				<Link to="#?">¿Olvidaste la contraseña?</Link>
			</ContentLink>
			<Submit type="submit" aria-label="Iniciar Sesión">
				Iniciar Sesión
			</Submit>
		</form>
	);
};

export default FormLogin;
