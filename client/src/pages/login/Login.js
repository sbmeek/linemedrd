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
	padding: 0.38rem;
	font-size: 1rem;
	border-radius: 0.4rem;
	width: 13rem;
`;

const ContentPopper = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	position: relative;

	.icon-content {
		padding-top: 0.2rem;
		fill: ${({ theme }) => theme.colors.white};

		.icon-popper {
			height: 1.2rem;
			width: 1.2rem;
		}
	}

	div:last-child {
		margin-left: 0.3rem;
		text-align: justify;
	}

	:before {
		content: '';
		position: absolute;
		left: 0.5rem;
		top: -0.91rem;
		width: 0.95rem;
		height: 0px;
		border-left: 7px solid transparent;
		border-right: 7px solid transparent;
		border-bottom: 14px solid ${({ theme }) => theme.letter.gray1};
		border-radius: 2px;
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
	};

	const handlePopper = () => {
		setPopperOpen(open => !open);
	};

	const { styles, attributes } = usePopper(referenceElement, popperElement, {
		modifiers: [
			{
				name: 'offset',
				options: {
					offset: [85, 15]
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
				Test Popper
			</button>
			{popperOpen ? (
				<Emergente
					ref={setPopperElement}
					style={styles.popper}
					{...attributes.popper}
				>
					<ContentPopper>
						<div className="icon-content">
							<div className="icon-popper">
								<ExclamationIcon />
							</div>
						</div>
						<div>
							Este es el popper yo no recuerdo nada todo bien por el momento
						</div>
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
