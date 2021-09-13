import { useEffect, useState } from 'react';

import Link, { ContentLink } from '@/shared/link/Link';
import Submit from '@/shared/submit/Submit';
import ContentInput from '@/shared/inputForm/InputForm';
import ContentInputIcon, { Icon } from '@/shared/inputIconForm/InputIconForm';
import { useTranslation } from 'react-i18next';
import { useField } from '@/hooks/useField';
import useAuth from '@/context/authContext';
import EyeIcon from '@/assets/icon/eye_icon/EyeIcon';
import EyeCloseIcon from '@/assets/icon/eyeClose_icon/EyeCloseIcon';
import { useForm } from 'react-hook-form';

const FormLogin = () => {
	const [passwordIcon, setPasswordIcon] = useState(true);
	const emailField = useField({ name: 'email', type: 'text' });
	const passwordField = useField({ name: 'pwd', type: 'password' });
	const { login } = useAuth();
	const { t } = useTranslation();

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const handleFormSubmit = evt => {
		evt.preventDefault();
		console.info(evt);
		login(emailField.value, passwordField.value);
	};

	console.info(errors);

	useEffect(() => {
		passwordField.type = passwordIcon ? 'password' : 'text';
	}, [passwordIcon]);

	return (
		<form onSubmit={handleSubmit(handleFormSubmit)}>
			<ContentInput {...{ login: true }}>
				<input
					{...register('email', {
						required: { value: true, message: 'este campo es requerido' },
						minLength: { value: 5, message: 'el minimo de caracteres es 5' },
						maxLength: { value: 20, message: 'el maximo de caracteres es 20' },
						pattern: {
							value: /\d+/,
							message: 'This input is number only.'
						}
					})}
					placeholder={t('forms.formLogin.inputEmail.placeholder')}
					aria-label={t('forms.formLogin.inputEmail.areaLabel')}
					aria-required="true"
					required
					// {...emailField}
				/>
				{errors?.email?.message}
			</ContentInput>
			<ContentInputIcon {...{ login: true }}>
				<input
					placeholder={t('forms.formLogin.inputPassword.placeholder')}
					aria-label={t('forms.formLogin.inputPassword.placeholder')}
					aria-required="true"
					required
					{...passwordField}
				/>
				<Icon onClick={() => setPasswordIcon(!passwordIcon)}>
					{passwordIcon ? <EyeIcon /> : <EyeCloseIcon />}
				</Icon>
			</ContentInputIcon>
			<ContentLink
				{...{
					left: true
				}}
			>
				<Link to="#?">{t('forms.formLogin.forgetPassword')}</Link>
			</ContentLink>
			<Submit type="submit" aria-label={t('forms.formLogin.startSession')}>
				{t('forms.formLogin.startSession')}
			</Submit>
		</form>
	);
};

export default FormLogin;
