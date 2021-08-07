import { useState } from 'react';

import Link, { ContentLink } from '@/shared/link/Link';
import Submit from '@/shared/submit/Submit';
import ContentInput from '@/shared/inputForm/InputForm';
import ContentInputIcon, { Icon } from '@/shared/inputIconForm/InputIconForm';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';

const FormLogin = () => {
	const [passwordIcon, setPasswordIcon] = useState(true);

	const align = {
		left: true
	};

	return (
		<form>
			<ContentInput {...{ login: true }}>
				<input
					type="text"
					name="name"
					placeholder="Ingresar correo electrónico o nombre de usuario"
					aria-label="Ingresar nombre de usuario o correo"
					aria-required="true"
					required
				/>
			</ContentInput>
			<ContentInputIcon {...{ login: true }}>
				<input
					type={passwordIcon ? 'password' : 'text'}
					name="password"
					placeholder="Ingresar Contraseña"
					aria-label="Ingresar nombre de usuario o correo"
					aria-required="true"
					required
				/>
				<Icon
					onClick={() => setPasswordIcon(!passwordIcon)}
					{...{ label: true }}
				>
					{passwordIcon ? <IoIosEye /> : <IoIosEyeOff />}
				</Icon>
			</ContentInputIcon>
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
