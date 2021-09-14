import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useField } from '@/hooks/useField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Link, { ContentLink } from '@/shared/link/Link';
import Submit from '@/shared/submit/Submit';
import ContentInput from '@/shared/inputForm/InputForm';
import ContentInputIcon, { Icon } from '@/shared/inputIconForm/InputIconForm';
import { useTranslation } from 'react-i18next';
import useAuth from '@/context/authContext';
import EyeIcon from '@/assets/icon/eye_icon/EyeIcon';
import EyeCloseIcon from '@/assets/icon/eyeClose_icon/EyeCloseIcon';

// import { Translate as t } from '@/translate/Translate';

const schema = yup.object().shape({
	email: yup.string().email().required('Obligatorio'),
	pwd: yup.string().required('Obligatorio')
});

const FormLogin = () => {
	const {
		register,
		setError,
		handleSubmit,
		clearErrors,
		formState: { errors }
	} = useForm({ resolver: yupResolver(schema) });

	const [passwordIcon, setPasswordIcon] = useState(true);

	const emailField = useField({ ...register('email'), type: 'text' });
	const passwordField = useField({ ...register('pwd'), type: 'password' });

	const { login } = useAuth();
	const { t } = useTranslation();
	const handleFormSubmit = evt => {
		evt.preventDefault();
		console.info(evt);
		clearErrors();
		login(emailField.value, passwordField.value);
	};

	console.info(errors);

	// console.info(emailField, passwordField);

	useEffect(() => {
		passwordField.type = passwordIcon ? 'password' : 'text';
	}, [passwordIcon]);

	return (
		<form onSubmit={handleSubmit(handleFormSubmit)}>
			<ContentInput {...{ login: true }}>
				<input
					placeholder={t('forms.formLogin.inputEmail.placeholder')}
					aria-label={t('forms.formLogin.inputEmail.areaLabel')}
					{...emailField}
					onFocus={e => {
						const { value } = emailField;

						if (value.length === 0) {
							setError('email', {
								type: 'required',
								message: 'El email es obligatorio'
							});
						}
					}}
					onChange={e => {
						emailField.onChange(e);
						const { value } = emailField;
						if (value.length < 7) {
							setError('email', {
								type: 'minLength',
								message: `cantidad de caracter necesario 8`
							});
						} else {
							clearErrors();
						}
					}}
				/>
				<span>{errors.email?.message}</span>
			</ContentInput>
			<ContentInputIcon {...{ login: true }}>
				<input
					placeholder={t('forms.formLogin.inputPassword.placeholder')}
					aria-label={t('forms.formLogin.inputPassword.placeholder')}
					{...passwordField}
					type={passwordIcon ? 'password' : 'text'}
				/>
				{errors.pwd && <span>{errors?.pwd?.message}</span>}
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
