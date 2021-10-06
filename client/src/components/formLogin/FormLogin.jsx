import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Link from 'shared/link/Link';
import Submit from 'shared/submit/Submit';
import { Icon, InputWrapperIcon } from 'shared/inputIconForm/InputIconForm';
import { ContentInput, InputWrapper, Wrapper } from 'shared/Input/Input';
import { ContainerLink } from './FormLogin.styles';

import EyeIcon from 'assets/icon/eye_icon/EyeIcon';
import EyeCloseIcon from 'assets/icon/eyeClose_icon/EyeCloseIcon';

import FormErrorPopper from '../formErrorPopper/FormErrorPopper';

import useAuth from 'context/authContext';

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

	const { login, error } = useAuth();

	useEffect(() => {
		setTest(error);
		console.log(error);
	}, [error]);

	const handleFormSubmit = async e => {
		const { email, pwd } = e;
		const response = await login(email, pwd);
		console.log(response, 'second');
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
						content: t('formLogin.inputEmail')
					}}
				>
					<InputWrapper
						{...register('email', {
							required: t('required.email'),
							pattern: {
								value: /^[\w-.]+@(gmail|hotmail).+[\w-]{2,4}$/,
								message: 'Revisar su correo electronico'
							}
						})}
						onFocus={handleFocus}
						onBlur={() => setAnchorEl(null)}
						aria-label={t('formLogin.inputEmail')}
						className={!watch('email') && 'empty'}
					/>
				</Wrapper>
			</ContentInput>

			<ContentInput>
				<Wrapper
					{...{
						value: watch('pwd'),
						error: errors.pwd,
						content: t('formLogin.inputPassword')
					}}
				>
					<InputWrapperIcon
						aria-label={t('formLogin.inputPassword')}
						{...register('pwd', {
							required: t('required.password')
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
				<Link to="#?">{t('formLogin.forgetPassword')}</Link>
			</ContainerLink>
			<FormErrorPopper
				anchorEl={anchorEl}
				open={!!anchorEl}
				message={message}
			/>
			<Submit type="submit" aria-label={t('forms.formLogin.startSession')}>
				{t('formLogin.startSession')}
			</Submit>
		</form>
	);
};

export default FormLogin;
