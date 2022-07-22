import ExclamationIcon from 'assets/icon/exclamation_icon/ExclamationIcon';
import EyeCloseIcon from 'assets/icon/eyeClose_icon/EyeCloseIcon';
import EyeIcon from 'assets/icon/eye_icon/EyeIcon';
import { appName } from 'constants/index';
import useAuth from 'context/auth';
import { emailValid, inputEmpty, someFieldInvalid } from 'helpers/validators';
import { useFields } from 'hooks/useFields';
import i18n from 'i18n';
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

const Login = () => {
	const [showPwd, setShowPwd] = useState(true);
	const [backendError, setBackendError] = useState<string>('');
	const { login, setUser } = useAuth();
	const { values, errors, reset, handleChange, handleBlur } =
		useFields(defaultFieldValues);

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
					<Link to="#?">{i18n.t('login.forgetPassword')}</Link>
				</ContainerLink>
				{/* TODO Juan David: Estilos de boton deshabilitado y traducir textos en Login/Signup */}
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
		</SharedContainer>
	);
};

export default Login;
