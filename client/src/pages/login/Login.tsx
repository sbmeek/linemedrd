import Link, { ContentLink } from 'shared/link/Link';
import Title from 'shared/title/Title';
import { appName } from 'constants/index';
import { useTranslation } from 'react-i18next';
import { Container } from 'shared/container/Container';
import { Fragment, useState } from 'react';
import EyeCloseIcon from 'assets/icon/eyeClose_icon/EyeCloseIcon';
import EyeIcon from 'assets/icon/eye_icon/EyeIcon';
import useAuth from 'context/authContext';
import { useHistory } from 'react-router-dom';
import { ContentInput, Wrapper, Input, InputHelper } from 'shared/input/Input';
import { InputWithIcon, Icon } from 'shared/inputIcon/InputIcon';
import Submit from 'shared/submit/Submit';
import { useFields } from 'hooks/useFields';
import { ContainerLink } from './Login.styles';
import ExclamationIcon from 'assets/icon/exclamation_icon/ExclamationIcon';
import { emailValid, inputEmpty } from 'helpers/validators';

const Login = () => {
	const { t } = useTranslation();
	const [showPwd, setShowPwd] = useState(true);
	const history = useHistory();
	const { login } = useAuth();
	const { values, errors, handleChange, handleBlur } = useFields({
		email: {
			value: '',
			validations: [inputEmpty, emailValid]
		},
		pwd: {
			value: '',
			validations: []
		}
	});

	const handleFormSubmit = () => {
		const { email, pwd } = values;
		//TODO Dalvin: No llamar este metodo si todos los campos no estan OKs
		const response = login(email, pwd);
		console.log({ response });
		//TODO Angel: Mostrar respuesta del servidor
		history.push('/');
	};

	return (
		<Fragment>
			<Container>
				<Title>{t('login.title')}</Title>
				<form onSubmit={handleFormSubmit}>
					<ContentInput>
						<Wrapper value={values.email} placeholder={t('login.inputEmail')}>
							<Input
								aria-label={t('login.inputEmail')}
								value={values.email}
								name="email"
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</Wrapper>
						<InputHelper hide={!errors.email}>
							<ExclamationIcon />
							<span>{errors.email}</span>
						</InputHelper>
					</ContentInput>

					<ContentInput>
						<Wrapper value={values.pwd} placeholder={t('login.inputPassword')}>
							<InputWithIcon
								aria-label={t('login.inputPassword')}
								type={showPwd ? 'password' : 'text'}
								value={values.pwd}
								name="pwd"
								onChange={handleChange}
							/>
							<Icon onClick={() => setShowPwd(prev => !prev)}>
								{showPwd ? <EyeIcon /> : <EyeCloseIcon />}
							</Icon>
						</Wrapper>
					</ContentInput>

					<ContainerLink>
						<Link to="#?">{t('login.forgetPassword')}</Link>
					</ContainerLink>
					<Submit type="submit" aria-label={t('login.signIn')}>
						{t('login.signIn')}
					</Submit>
				</form>
				<ContentLink>
					<span>
						{t('login.newIn')} {appName}
					</span>{' '}
					<Link to="/Signup">{t('login.createAccount')}</Link>.
				</ContentLink>
			</Container>
		</Fragment>
	);
};

export default Login;
