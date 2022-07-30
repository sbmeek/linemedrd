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
	email: {
		value: '',
		validations: [inputEmpty, emailValid]
	}
};

const Login = () => {
	const [backendError, setBackendError] = useState<string>('');
	const [showPwd, setShowPwd] = useState(true);

	const [showModal, setShowModal] = useState<boolean>(false);
	const [email, setEmail] = useState<string>('');

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
		const { email } = valuesRecovery;
		setEmail(email);
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
				text={
					email
						? i18n.t('recoveryAccount.descriptionSendEmail')
						: i18n.t('recoveryAccount.description')
				}
				title={i18n.t('recoveryAccount.title')}
			>
				{email ? (
					<></>
				) : (
					<form onSubmit={handleFormSubmitEmail}>
						<ContentInputSignup>
							<label htmlFor="email">
								{i18n.t('recoveryAccount.label.inputEmail')}
							</label>
							<Wrapper
								value={valuesRecovery.email}
								error={erroresRecovery.email}
								placeholder={i18n.t(
									'recoveryAccount.inputsPlaceholder.inputEmail'
								)}
							>
								<Input
									aria-label={i18n.t(
										'recoveryAccount.inputsPlaceholder.inputEmail'
									)}
									value={valuesRecovery.email || ''}
									aria-required="true"
									name="email"
									onChange={handleChangeRecovery}
									onBlur={handleBlurRecovery}
								/>
							</Wrapper>
							<InputHelper hide={!erroresRecovery.email}>
								<ExclamationIcon />
								<span>{erroresRecovery.email}</span>
							</InputHelper>
						</ContentInputSignup>
						<Submit type="submit" disabled={someFieldInvalid(erroresRecovery)}>
							{i18n.t('recoveryAccount.buttonSend')}
						</Submit>
					</form>
				)}
			</ModalContainer>
		</SharedContainer>
	);
};

export default Login;
