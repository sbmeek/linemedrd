import { createRef, useState } from 'react';
import { CheckboxContainer } from './FormSignup.styles';
import Submit from '@/shared/submit/Submit';
import { appName } from '@/constants';
import Link from '@/shared/link/Link';
import ContentInputIcon, {
	IconLabel
} from '@/shared/inputIconForm/InputIconForm';
import EyeIcon from '@/assets/icon/eye_icon/EyeIcon';
import EyeCloseIcon from '@/assets/icon/eyeClose_icon/EyeCloseIcon';
import Input, { ContainerInputS } from '@/shared/Input/Input';
import InputPopper from '../inputPopper/InputPopper';

const FormSignup = () => {
	const [passwordIcon, setPasswordIcon] = useState(true);

	const [popperOpen, setPopperOpen] = useState(false);
	const [referenceElement, setReferenceElement] = useState(null);

	const [userSignup, setUserSignup] = useState({
		name: { value: '', placeholder: 'Ingresar Username', ref: createRef() },
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

	const handlefocus = e => {
		console.log(e);
		// console.info(userSignup.name.ref);
		setReferenceElement(userSignup.name.ref.current);
	};

	return (
		<form>
			<ContainerInputS>
				<label htmlFor="signup-username">Nombre de usuario</label>
				<Input {...{ text: userSignup.name }}>
					<input
						{...{ text: userSignup.name }}
						ref={userSignup.name.ref}
						onFocus={handlefocus}
						type="text"
						name="name"
						aria-label="Ingresar username"
						aria-required="true"
						id="signup-username"
						onChange={handleChange}
						required
					/>
				</Input>
			</ContainerInputS>

			<ContainerInputS>
				<label htmlFor="signup-email">Email</label>
				<Input {...{ text: userSignup.email }}>
					<input
						type="text"
						name="email"
						aria-label="Ingresar email"
						aria-required="true"
						id="signup-email"
						onChange={handleChange}
						required
					/>
				</Input>
			</ContainerInputS>

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
					{passwordIcon ? <EyeIcon /> : <EyeCloseIcon />}
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

			<InputPopper elementReference={referenceElement} />
			<Submit type="submit">Regístrate</Submit>
		</form>
	);
};

export default FormSignup;
