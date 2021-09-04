import { Container } from '@/shared/container/Container';
import Title from '@/shared/title/Title';
import Link, { ContentLink } from '@/shared/link/Link';
import { appName } from '@/constants';
import ModalWrape from './ModalReserve.styles';
import { Fragment } from 'react';

const ModalReserve = ({ showModal, setShowModal }) => {
	return (
		<Fragment>
			{showModal ? (
				<ModalWrape onClick={() => setShowModal(bool => !bool)}>
					<Container>
						<div>
							<Title>Gracias por realizar tu cita en {appName}.</Title>
							<ContentLink>
								<div className="modal">
									<span>Su cita queda en espera de confirmación.</span> Puedes
									ver el estatus y toda la información de la cita en{' '}
									<Link to="#?">Citas reservadas</Link> o en tu correo
									electrónico.
								</div>
							</ContentLink>
							<div>
								<div>
									<div className="icon"></div>
								</div>
							</div>
						</div>
					</Container>
				</ModalWrape>
			) : null}
		</Fragment>
	);
};

export default ModalReserve;
