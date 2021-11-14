import { ContentLink, Link } from 'shared/link/Link';
import Title from 'shared/title/Title';
import { appName } from 'constants/index';
import i18n from 'i18n';
import { Container } from 'shared/container/Container';
import { FormEvent, Fragment, useEffect, useState } from 'react';
import EyeCloseIcon from 'assets/icon/eyeClose_icon/EyeCloseIcon';
import EyeIcon from 'assets/icon/eye_icon/EyeIcon';
import useAuth from 'context/auth/authContext';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ContentInput, Wrapper, Input, InputHelper } from 'shared/input/Input';
import { InputWithIcon, Icon } from 'shared/inputIcon/InputIcon';
import Submit from 'shared/submit/Submit';
import { useFields } from 'hooks/useFields';
import { ContainerLink } from './Login.styles';
import ExclamationIcon from 'assets/icon/exclamation_icon/ExclamationIcon';
import {
	emailValid,
	inputEmpty,
	inputPasswordValidation,
	validationAllInputs
} from 'Helpers/validators';

const defaultUseField = {
	email: {
		value: '',
		validations: [inputEmpty, emailValid]
	},
	pwd: {
		value: '',
		//TODO: la cuenta de martin debe cambiar la clave para que se mayor de 6 characteres
		validations: [inputEmpty /*,inputPasswordValidation*/]
	}
};

const Login = <T extends RouteComponentProps>({ history }: T) => {
	const [showPwd, setShowPwd] = useState(true);

	//Provisional
	const [error, setError] = useState<string>('');

	// TODO: revisar porque cuando se pasa el prop error de useAuth llega tarde en el submit;
	const { login: loggingUser, setUser } = useAuth();

	const { values, errors, reset, handleChange, handleBlur } =
		useFields(defaultUseField);

	const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		//TODO Angel: Mostrar respuesta del servidor
		if (validationAllInputs(errors)) {
			//TODO: deshabilitar el input submit o agregar una ventana emergente de error:]
			return;
		}

		const response = await loggingUser(values);

		if (!response.ok) {
			setError(response.msg);
			return;
		}

		setError('');
		reset();
		if (setUser) setUser(response);
	};

	return (
		<Fragment>
			<Container>
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

						<InputHelper hide={!error}>
							<ExclamationIcon />
							<span>{error}</span>
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
					<Submit type="submit" aria-label={i18n.t('login.signIn')}>
						{i18n.t('login.signIn')}
					</Submit>
				</form>
				<ContentLink>
					<span>
						{i18n.t('login.newIn')} {appName}
					</span>{' '}
					<Link to="/Signup">{i18n.t('login.createAccount')}</Link>.
				</ContentLink>
			</Container>
		</Fragment>
	);
};

export default withRouter(Login);
