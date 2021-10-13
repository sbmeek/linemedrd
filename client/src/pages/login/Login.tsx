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
import { ContentInput, Wrapper, Input } from 'shared/input/Input';
import { InputWithIcon, Icon } from 'shared/inputIconForm/InputIconForm';
import Submit from 'shared/submit/Submit';
import { useFields } from 'hooks/useFields';
import { ContainerLink } from './Login.styles';

//TODO Dalvin: Input field animations/transitions not working properly...
const Login = () => {
	const { t } = useTranslation();
	const [showPwd, setShowPwd] = useState(true);
	const history = useHistory();
	const { login } = useAuth();
	const { values, handleChange } = useFields({ email: '', pwd: '' });

	const handleFormSubmit = () => {
		const { email, pwd } = values;
		const response = login(email, pwd);
		console.log({ response });
		history.push('/');
	};

	return (
		<Fragment>
			<Container>
				<Title>{t('pages.Login.title')}</Title>
				<form onSubmit={handleFormSubmit}>
					<ContentInput>
						<Wrapper content={t('formLogin.inputEmail')}>
							<Input
								aria-label={t('formLogin.inputEmail')}
								onChange={handleChange}
							/>
						</Wrapper>
					</ContentInput>

					<ContentInput>
						<Wrapper content={t('formLogin.inputPassword')}>
							<InputWithIcon
								onChange={handleChange}
								aria-label={t('formLogin.inputPassword')}
								type={showPwd ? 'password' : 'text'}
							/>
							<Icon onClick={() => setShowPwd(prev => !prev)}>
								{showPwd ? <EyeIcon /> : <EyeCloseIcon />}
							</Icon>
						</Wrapper>
					</ContentInput>

					<ContainerLink>
						<Link to="#?">{t('formLogin.forgetPassword')}</Link>
					</ContainerLink>
					<Submit type="submit" aria-label={t('forms.formLogin.startSession')}>
						{t('formLogin.startSession')}
					</Submit>
				</form>
				<ContentLink>
					<span>
						{t('pages.Login.newIn')} {appName}
					</span>{' '}
					<Link to="/Signup">{t('pages.Login.createAccount')}</Link>.
				</ContentLink>
			</Container>
		</Fragment>
	);
};

export default Login;
