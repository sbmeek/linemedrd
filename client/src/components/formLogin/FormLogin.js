import Link, { ContentLink } from '@/shared/link/Link';
import Submit from '@/shared/submit/Submit';
import { Input } from './FormLogin.styles';

const FormLogin = () => {
	const align = {
		left: true
	};

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
