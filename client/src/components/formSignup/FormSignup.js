import { useState } from 'react';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';

import { CheckboxContainer } from './FormSignup.styles';
import Submit from '@/shared/submit/Submit';
import { appName } from '@/constants';
import Link from '@/shared/link/Link';
import ContentInput from '@/shared/inputForm/InputForm';
import ContentInputIcon, {
	IconLabel
} from '@/shared/inputIconForm/InputIconForm';

const FormSignup = () => {
	const [passwordIcon, setPasswordIcon] = useState(true);

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
			<ContentInputIcon>
				<label htmlFor="signup-password">Contraseña</label>
				<input
					type={passwordIcon ? 'password' : 'text'}
					name="signupPassword"
					aria-label="Ingresar contraseña"
					placeholder="Ingresar contraseña"
					aria-required="true"
					id="signup-password"
					required
				/>
				<IconLabel onClick={() => setPasswordIcon(!passwordIcon)}>
					{passwordIcon ? <IoIosEye /> : <IoIosEyeOff />}
				</IconLabel>
			</ContentInputIcon>
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
