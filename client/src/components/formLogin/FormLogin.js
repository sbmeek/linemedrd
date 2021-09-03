import { useEffect, useState } from 'react';

import Link, { ContentLink } from '@/shared/link/Link';
import Submit from '@/shared/submit/Submit';
import ContentInput from '@/shared/inputForm/InputForm';
import ContentInputIcon, { Icon } from '@/shared/inputIconForm/InputIconForm';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import { useField } from '@/hooks/useField';
import useAuth from '@/context/authContext';

const FormLogin = () => {
	const [passwordIcon, setPasswordIcon] = useState(true);
	const emailField = useField({ name: 'email', type: 'text' });
	const passwordField = useField({ name: 'pwd', type: 'password' });
	const { login } = useAuth();
	const { t } = useTranslation();

	const handleFormSubmit = evt => {
		evt.preventDefault();
		login(emailField.value, passwordField.value);
	};

	useEffect(() => {
		passwordField.type = passwordIcon ? 'password' : 'text';
	}, [passwordIcon]);

	return (
		<form onSubmit={handleFormSubmit}>
			<ContentInput {...{ login: true }}>
				<input
					placeholder={t('forms.formLogin.inputEmail.placeholder')}
					aria-label={t('forms.formLogin.inputEmail.areaLabel')}
					aria-required="true"
					required
					{...emailField}
				/>
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
					{passwordIcon ? <IoIosEye /> : <IoIosEyeOff />}
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
