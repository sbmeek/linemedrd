// @ts-nocheck
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Link, { ContentLink } from '@/shared/link/Link';
import Submit from '@/shared/submit/Submit';
import ContentInput from '@/shared/inputForm/InputForm';
import ContentInputIcon, { Icon } from '@/shared/inputIconForm/InputIconForm';
import { useTranslation } from 'react-i18next';
import { useField } from '@/hooks/useField';
import useAuth from '@/context/authContext';
import EyeIcon from '@/assets/icon/eye_icon/EyeIcon';
import EyeCloseIcon from '@/assets/icon/eyeClose_icon/EyeCloseIcon';

const schema = yup.object().shape({
	email: yup.string().email().required(),
	pwd: yup.string().required()
});

const FormLogin = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({ resolver: yupResolver(schema) });

	const [passwordIcon, setPasswordIcon] = useState(true);
	const emailField = useField({ ...register('email'), type: 'text' });
	const passwordField = useField({ ...register('pwd'), type: 'password' });
	const { login } = useAuth();
	const { t } = useTranslation();

	const onSubmit = data => {
		data.preventDefault();
		login(emailField.value, passwordField.value);
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<ContentInput {...{ login: true }}>
				<input
					placeholder={t('forms.formLogin.inputEmail.placeholder')}
					aria-label={t('forms.formLogin.inputEmail.areaLabel')}
					aria-required="true"
					required
					{...emailField}
				/>
				{errors.email && <span>{errors.email.message}</span>}
			</ContentInput>
			<ContentInputIcon {...{ login: true }}>
				<input
					placeholder={t('forms.formLogin.inputPassword.placeholder')}
					aria-label={t('forms.formLogin.inputPassword.placeholder')}
					aria-required="true"
					required
					{...passwordField}
					type={passwordIcon ? 'password' : 'text'}
				/>
				{errors.pwd && <span>{errors.pwd.message}</span>}
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
