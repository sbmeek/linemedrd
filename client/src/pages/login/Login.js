import FormLogin from '../../components/formLogin/FormLogin';
import Link, { ContentLink } from '@/shared/link/Link';
import Title from '@/shared/title/Title';
import { appName } from '@/constants';

import { useTranslation } from 'react-i18next';

import { Container } from '@/shared/container/Container';
import { Fragment, useState } from 'react';
import ModalReserve from '@/components/modal/ModalReserve/ModalReserve';

import { usePopper } from 'react-popper';

import styled from '@emotion/styled';
import ExclamationIcon from '@/assets/icon/exclamation_icon/ExclamationIcon';

const Emergente = styled.div`
	background-color: ${({ theme }) => theme.letter.gray1};
	color: ${({ theme }) => theme.colors.white};
	padding: 0.6rem;
	font-size: 0.83em;
	border-radius: 0.4rem;
	width: 9rem;
`;

const ContentPopper = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;

	div:first-child {
		display: flex;
		align-items: flex-start;
		height: 1rem;
		width: 1rem;
		fill: ${({ theme }) => theme.colors.white};
	}

	div:last-child {
		margin-left: 0.5rem;
		text-align: left;
	}
`;

const Login = () => {
	const { t } = useTranslation();

	const [showModal, setShowModal] = useState(false);
	const [popperOpen, setPopperOpen] = useState(false);
	const [referenceElement, setReferenceElement] = useState(null);
	const [popperElement, setPopperElement] = useState(null);

	const handleModal = () => {
		setShowModal(prev => !prev);
		console.log(showModal);
	};

	const handlePopper = () => {
		setPopperOpen(open => !open);
	};

	const { styles, attributes } = usePopper(referenceElement, popperElement, {
		modifiers: [
			{
				name: 'offset',
				options: {
					offset: [85, 10]
				}
			}
		]
	});

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
			<button type="button" ref={setReferenceElement} onClick={handlePopper}>
				Reference element
			</button>
			{popperOpen ? (
				<Emergente
					ref={setPopperElement}
					style={styles.popper}
					{...attributes.popper}
				>
					<ContentPopper>
						<div>
							<ExclamationIcon />
						</div>
						<div>Este es el popper</div>
					</ContentPopper>

					<div style={styles.arrow}></div>
				</Emergente>
			) : null}

			<button onClick={handleModal} type="button">
				Abrir Modal Test
			</button>
		</Fragment>
	);
};

export default Login;
