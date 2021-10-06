import FormLogin from 'components/formLogin/FormLogin';
import Link, { ContentLink } from 'shared/link/Link';
import Title from 'shared/title/Title';
import { appName } from 'constants/index';

import { useTranslation } from 'react-i18next';

import { Container } from 'shared/container/Container';
import { Fragment } from 'react';
import ModalReserve from 'components/modalReserve/ModalReserve';

import useAlerta from 'context/alerta/alertaState';
import ModalFullScreen from 'components/modalFullScreen/ModalFullScreen';

const Login = () => {
	const { t } = useTranslation();

	const { showModal } = useAlerta();

	return (
		<Fragment>
			<ModalFullScreen>
				<ModalReserve />
			</ModalFullScreen>
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
			<button onClick={showModal} type="button">
				Abrir Modal Test
			</button>
		</Fragment>
	);
};

export default Login;
