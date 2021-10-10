import FormLogin from 'components/formLogin/FormLogin';
import Link, { ContentLink } from 'shared/link/Link';
import Title from 'shared/title/Title';
import { appName } from 'constants/index';

import { useTranslation } from 'react-i18next';

import { Container } from 'shared/container/Container';
import { Fragment } from 'react';

const Login = () => {
	const { t } = useTranslation();

	return (
		<Fragment>
			<Container>
				<Title>{t('pages.Login.title')}</Title>
				<FormLogin />
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
