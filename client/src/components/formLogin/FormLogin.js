import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Link from '@/shared/link/Link';
import Submit from '@/shared/submit/Submit';
import { Icon, InputWrapperIcon } from '@/shared/inputIconForm/InputIconForm';
import { ContentInput, InputWrapper, Wrapper } from '@/shared/Input/Input';
import { ContainerLink } from './FormLogin.styles';

import EyeIcon from '@/assets/icon/eye_icon/EyeIcon';
import EyeCloseIcon from '@/assets/icon/eyeClose_icon/EyeCloseIcon';

import FormErrorPopper from '../formErrorPopper/FormErrorPopper';

// import useAuth from '@/context/authContext';
import { SessionContext } from '@/context/session/sessionContext';

const FormLogin = () => {
	const {
		register,
		handleSubmit,
		clearErrors,
		watch,
		formState: { errors }
	} = useForm();

	const [anchorEl, setAnchorEl] = useState(null);
	const [message, setMessage] = useState(null);

	const [test, setTest] = useState(null);

	const [visible, setVisible] = useState(true);

	const { t } = useTranslation();
	const history = useHistory();

	// const { error } = useAuth();

	const { login, error, user } = useContext(SessionContext);

	useEffect(() => {
		setTest(error);
		// console.log('login failed', error);
	}, [error]);

	const handleFormSubmit = async e => {
		const { email, pwd } = e;
		await login(email, pwd);

		console.log('login success', user);
		console.log('login failed', error);
		console.log(test);
		history.push('/');
		clearErrors();
	};

	const handleFocus = ({ target }) => {
		const { name } = target;

		if (errors[name]) {
			setAnchorEl(target);
			setMessage(errors[name].message);
		}
	};

	return (
		<form onSubmit={handleSubmit(handleFormSubmit)}>
			<ContentInput>
				<Wrapper
					{...{
						value: watch('email'),
						error: errors.email,
						content: t('forms.formLogin.inputEmail.placeholder')
					}}
				>
					<InputWrapper
						{...register('email', {
							required: 'El email es requido',
							pattern: {
								value: /^[\w-.]+@(gmail|hotmail).+[\w-]{2,4}$/,
								message: 'Revisar su correo electronico'
							}
						})}
						onFocus={handleFocus}
						onBlur={() => setAnchorEl(null)}
						aria-label={t('forms.formLogin.inputEmail.areaLabel')}
						className={!watch('email') && 'empty'}
					/>
				</Wrapper>
			</ContentInput>

			<ContentInput>
				<Wrapper
					{...{
						value: watch('pwd'),
						error: errors.pwd,
						content: t('forms.formLogin.inputPassword.placeholder')
					}}
				>
					<InputWrapperIcon
						aria-label={t('forms.formLogin.inputPassword.placeholder')}
						{...register('pwd', {
							required: 'La contraseña es requerida'
						})}
						onFocus={handleFocus}
						onBlur={() => setAnchorEl(null)}
						type={visible ? 'password' : 'text'}
						className={!watch('pwd') && 'empty'}
					/>
					<Icon onClick={() => setVisible(prev => !prev)}>
						{visible ? <EyeIcon /> : <EyeCloseIcon />}
					</Icon>
				</Wrapper>
			</ContentInput>

			<ContainerLink>
				<Link to="#?">{t('forms.formLogin.forgetPassword')}</Link>
			</ContainerLink>
			<FormErrorPopper
				anchorEl={anchorEl}
				open={!!anchorEl}
				message={message}
			/>
			<Submit type="submit" aria-label={t('forms.formLogin.startSession')}>
				{t('forms.formLogin.startSession')}
			</Submit>
		</form>
	);
};

export default FormLogin;
