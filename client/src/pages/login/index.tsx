import ExclamationIcon from 'assets/icon/exclamation_icon/ExclamationIcon';
import EyeCloseIcon from 'assets/icon/eyeClose_icon/EyeCloseIcon';
import EyeIcon from 'assets/icon/eye_icon/EyeIcon';
import ModalContainer from 'components/modal-container';
import { appName } from 'constants/index';
import useAuth from 'context/auth';
import { emailValid, inputEmpty, someFieldInvalid } from 'helpers/validators';
import { useFields } from 'hooks/useFields';
import i18n from 'i18n';
import { ContentInputSignup } from 'pages/signup/styles';
import { FormEvent, useState } from 'react';
import { ContentInput, Input, InputHelper, Wrapper } from 'shared/input';
import { Icon, InputWithIcon } from 'shared/input-icon';
import { ContentLink, Link } from 'shared/link';
import { SharedContainer } from 'shared/shared-container';
import Submit from 'shared/submit';
import Title from 'shared/title';
import { ContainerLink } from './styles';

const defaultFieldValues = {
	email: {
		value: '',
		validations: [inputEmpty, emailValid]
	},
	pwd: {
		value: '',
		validations: [inputEmpty]
	}
};

const FieldValuesEmail = {
	emailRecovery: {
		value: '',
		validations: [inputEmpty, emailValid]
	}
};

const Login = () => {
	const [showPwd, setShowPwd] = useState(true);
	const [backendError, setBackendError] = useState<string>('');
	const [showModal, setShowModal] = useState(false);

	const { login, setUser } = useAuth();

	const { values, errors, reset, handleChange, handleBlur } =
		useFields(defaultFieldValues);

	const {
		values: valuesRecovery,
		errors: erroresRecovery,
		handleChange: handleChangeRecovery,
		handleBlur: handleBlurRecovery
	} = useFields(FieldValuesEmail);

	const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const response = await login(values);
		if (!response?.ok) {
			setBackendError(response.msg);
			return;
		}
		setBackendError('');
		reset();
		setUser(response);
	};

	const handleFormSubmitEmail = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('handleFormSubmitEmail');
	};

	return (
		<SharedContainer>
			<Title>{i18n.t('login.title')}</Title>
			<form onSubmit={handleFormSubmit}>
				<ContentInput>
					<Wrapper
						value={values?.email}
						error={errors?.email}
						placeholder={i18n.t('login.inputEmail')}
					>
						<Input
							aria-label={i18n.t('login.inputEmail')}
							value={values.email || ''}
							name="email"
							onChange={handleChange}
							onBlur={handleBlur}
						/>
					</Wrapper>
					<InputHelper hide={!errors?.email}>
						<ExclamationIcon />
						<span>{errors?.email}</span>
					</InputHelper>

					<InputHelper hide={!backendError}>
						<ExclamationIcon />
						<span>{backendError}</span>
					</InputHelper>
				</ContentInput>

				<ContentInput>
					<Wrapper
						value={values?.pwd}
						error={errors?.pwd}
						placeholder={i18n.t('login.inputPassword')}
					>
						<InputWithIcon
							aria-label={i18n.t('login.inputPassword')}
							type={showPwd ? 'password' : 'text'}
							value={values.pwd || ''}
							name="pwd"
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						<Icon onClick={() => setShowPwd(prev => !prev)}>
							{showPwd ? <EyeIcon /> : <EyeCloseIcon />}
						</Icon>
					</Wrapper>
					<InputHelper hide={!errors?.pwd}>
						<ExclamationIcon />
						<span>{errors?.pwd}</span>
					</InputHelper>
				</ContentInput>

				<ContainerLink>
					<Link to="#?" onClick={() => setShowModal(true)}>
						{i18n.t('login.forgetPassword')}
					</Link>
				</ContainerLink>
				<Submit
					type="submit"
					aria-label={i18n.t('login.signIn')}
					disabled={someFieldInvalid(errors)}
				>
					{i18n.t('login.signIn')}
				</Submit>
			</form>
			<ContentLink>
				<span>
					{i18n.t('login.newIn')} {appName}
				</span>{' '}
				<Link to="/Signup">{i18n.t('login.createAccount')}</Link>.
			</ContentLink>
			<ModalContainer
				onClose={() => setShowModal(false)}
				show={showModal}
				text="Ingresar un correo con el que registro la cuenta para enviarte un correo con las instrucciones para recuperar contraseña"
				title="Recuperación de Cuenta"
			>
				<form onSubmit={handleFormSubmitEmail}>
					<ContentInputSignup>
						<label htmlFor="emailRecovery">Correo electrónico</label>
						<Wrapper
							value={valuesRecovery.emailRecovery}
							error={erroresRecovery.emailRecovery}
							placeholder={'Ingrese su correo'}
						>
							<Input
								aria-label={i18n.t('Ingrese su correo')}
								value={valuesRecovery.emailRecovery || ''}
								aria-required="true"
								name="emailRecovery"
								onChange={handleChangeRecovery}
								onBlur={handleBlurRecovery}
							/>
						</Wrapper>
						<InputHelper hide={!erroresRecovery.emailRecovery}>
							<ExclamationIcon />
							<span>{erroresRecovery.emailRecovery}</span>
						</InputHelper>
					</ContentInputSignup>
					<Submit type="submit" disabled={someFieldInvalid(erroresRecovery)}>
						Enviar Correo Electrónico
					</Submit>
				</form>
			</ModalContainer>
		</SharedContainer>
	);
};

export default Login;
