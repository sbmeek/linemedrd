// import { useState } from 'react';

// import { CheckboxContainer } from './FormSignup.styles';
import Submit from '@/shared/submit/Submit';
// import { appName } from '@/constants';
// import Link from '@/shared/link/Link';
// import ContentInputIcon, {
// 	IconLabel
// } from '@/shared/inputIconForm/InputIconForm';
// import EyeIcon from '@/assets/icon/eye_icon/EyeIcon';
// import EyeCloseIcon from '@/assets/icon/eyeClose_icon/EyeCloseIcon';
import { ContentInput, InputWrapper, Wrapper } from '@/shared/Input/Input';
// import InputPopper from '../inputPopper/InputPopper';

import { useForm } from 'react-hook-form';
import { useFormSignup } from '@/hooks/useFormSignup';
// import FormErrorPopper from '../formErrorPopper/FormErrorPopper';

const FormSignup = () => {
	// const [passwordIcon, setPasswordIcon] = useState(true);
	// const [referenceElement, setReferenceElement] = useState(null);

	const {
		register,
		watch,
		handleSubmit,
		formState: { errors }
	} = useForm();

	// const [userSignup, setUserSignup] = useState({
	// 	name: {
	// 		value: '',
	// 		placeholder: 'Escribe tu nombre de usuario'
	// 	},
	// 	email: {
	// 		value: '',
	// 		placeholder: 'Escribe tu correo'
	// 	},
	// 	password: { value: '', placeholder: 'Ingresar username' }
	// });

	const [Input] = useFormSignup(
		'username',
		'nombre de usuario',
		'Ingresar nombre de usuario'
	);

	const onSubmit = data => console.log(data);

	console.log(errors, errors.userName);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<ContentInput>
				<label htmlFor="signup-username">Nombre de usuario</label>
				<Wrapper {...username}>
					<InputWrapper
						{...username}
						type="text"
						id="signup-username"
						aria-label="Ingresar username"
					/>
				</Wrapper>
			</ContentInput>
			{errors.userName && <p>{errors.userName?.message}</p>}
			{Input(register)}
			{/* <ContentInput>
				<label htmlFor="signup-email">Email</label>
				<Wrapper {...{ text: userSignup.email }}>
					<input
						{...{ text: userSignup.email }}
						onFocus={handleFocus}
						onBlur={handleBlur}
						type="text"
						name="email"
						aria-label="Ingresar email"
						aria-required="true"
						id="signup-email"
						onChange={handleChange}
						required
					/>
				</Wrapper>
			</ContentInput> */}

			{/* <ContentInputIcon>
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
			</ContentInputIcon> */}
			{/* <CheckboxContainer htmlFor="polity">
				<input type="checkbox" name="polity" id="polity" />

				<span>
					Declaro que soy mayor de edad y acepto el{' '}
					<Link to="#">Aviso de privacidad</Link> y los{' '}
					<Link to="#">Términos y condiciones</Link> de uso de {appName}.
				</span>
			</CheckboxContainer> */}
			{/* {referenceElement !== null ? (
				<InputPopper elementReference={referenceElement} />
			) : null} */}
			<Submit type="submit">Regístrate</Submit>
		</form>
	);
};

export default FormSignup;
