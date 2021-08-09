import FormLogin from '../../components/formLogin/FormLogin';
import Link, { ContentLink } from '@/shared/link/Link';
import Title from '@/shared/title/Title';
import { appName } from '@/constants';

import { useTranslation } from 'react-i18next';

import { Container } from '@/shared/container/Container';

const Login = () => {
	const { t } = useTranslation();
	return (
		<Container>
			<Title>{t('pages.login.title')}</Title>
			<FormLogin />
			<ContentLink>
				<span>Nuevo en {appName}</span>{' '}
				<Link to="./Signup">Crea una Cuenta</Link>.
			</ContentLink>
		</Container>
	);
};

export default Login;
