import FormLogin from '../../components/formLogin/FormLogin';
import { Container } from './Login.styles';
import Link, { ContentLink } from '@/shared/link/Link';
import Title from '@/shared/title/Title';
import { appName } from '@/constants';

import { useTranslation } from 'react-i18next';

const Login = () => {
	const { t } = useTranslation();
	return (
		<Container>
			<Title>{t('pages.login.title')}</Title>
			<FormLogin />
			<ContentLink>
				<span>
					{t('pages.login.firstTime')} {appName}
				</span>
				<Link to="./Signup">{t('pages.login.createAccount')}</Link>.
			</ContentLink>
		</Container>
	);
};

export default Login;
