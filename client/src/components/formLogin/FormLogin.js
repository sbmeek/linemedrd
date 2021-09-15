import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useField } from '@/hooks/useField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Link from '@/shared/link/Link';
import Submit from '@/shared/submit/Submit';
import { useTranslation } from 'react-i18next';
import useAuth from '@/context/authContext';
import EyeIcon from '@/assets/icon/eye_icon/EyeIcon';
import EyeCloseIcon from '@/assets/icon/eyeClose_icon/EyeCloseIcon';
import { ContentInput, InputWrapper, Wrapper } from '@/shared/Input/Input';
import { Icon, InputWrapperIcon } from '@/shared/inputIconForm/InputIconForm';

import { ContainerLink } from './FormLogin.styles';

const schema = yup.object().shape({
	email: yup.string().email().required('Obligatorio'),
	pwd: yup.string().required('Obligatorio')
});

const FormLogin = () => {
	const {
		register,
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

	useEffect(() => {
		passwordField.type = passwordIcon ? 'password' : 'text';
	}, [passwordIcon]);

	return (
		<form onSubmit={handleSubmit(handleFormSubmit)}>
			<ContentInput {...{ login: true }}>
				<Wrapper
					{...{
						value: '',
						content: t('forms.formLogin.inputEmail.placeholder')
					}}
				>
					<InputWrapper
						aria-label={t('forms.formLogin.inputEmail.areaLabel')}
						{...emailField}
						className={'empty'}
					/>
				</Wrapper>
				{errors.email && <span>{errors?.email?.message}</span>}
			</ContentInput>

			<ContentInput {...{ login: true }}>
				<Wrapper
					{...{
						value: '',
						content: t('forms.formLogin.inputPassword.placeholder')
					}}
				>
					<InputWrapperIcon
						aria-label={t('forms.formLogin.inputPassword.placeholder')}
						{...passwordField}
						type={passwordIcon ? 'password' : 'text'}
						className={'empty'}
					/>
					<Icon onClick={() => setPasswordIcon(!passwordIcon)}>
						{passwordIcon ? <EyeIcon /> : <EyeCloseIcon />}
					</Icon>
				</Wrapper>
				{errors.pwd && <span>{errors?.pwd?.message}</span>}
			</ContentInput>

			<ContainerLink>
				<Link to="#?">{t('forms.formLogin.forgetPassword')}</Link>
			</ContainerLink>
			<Submit type="submit" aria-label={t('forms.formLogin.startSession')}>
				{t('forms.formLogin.startSession')}
			</Submit>
		</form>
	);
};

export default FormLogin;
