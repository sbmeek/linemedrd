import FormLogin from '../../components/formLogin/FormLogin';
import Link, { ContentLink } from '@/shared/link/Link';
import Title from '@/shared/title/Title';
import { appName } from '@/constants';

import { useTranslation } from 'react-i18next';

import { Container } from '@/shared/container/Container';
import { Fragment, useState } from 'react';
import ModalReserve from '@/components/modal/ModalReserve/ModalReserve';

const Login = () => {
	const { t } = useTranslation();

	const [showModal, setShowModal] = useState(false);
	const handleModal = () => {
		setShowModal(prev => !prev);
		console.log(showModal);
	};

	return (
		<Fragment>
			<ModalReserve showModal={showModal} setShowModal={setShowModal} />
			<Container>
				<Title>{t('pages.login.title')}</Title>
				<FormLogin />
				<ContentLink>
					<span>Nuevo en {appName}</span>{' '}
					<Link to="/Signup">Crea una Cuenta</Link>.
				</ContentLink>
			</Container>
			<button onClick={handleModal} type="button">
				Abrir Modal Test
			</button>
		</Fragment>
	);
};

export default Login;
