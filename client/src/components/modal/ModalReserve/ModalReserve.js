import Link from '@/shared/link/Link';
import { appName } from '@/constants';
import ModalBackground, {
	TitleModal,
	ModalInfo,
	LinkReserve,
	ContainerModal,
	ContentModal,
	ModalClose,
	LinkButton
} from './ModalReserve.styles';
import { Fragment } from 'react';
import CalendarIcon from '@/assets/icon/calendar_icon/CalendarIcon';
import AddIcon from '@/assets/icon/add_icon/AddIcon';

const ModalReserve = ({ showModal, setShowModal }) => {
	return (
		<Fragment>
			{showModal ? (
				<ModalBackground>
					<ModalClose onClick={() => setShowModal(bool => !bool)}>
						<div>
							<AddIcon />
						</div>
						<div>Cerrar</div>
					</ModalClose>
					<ContainerModal>
						<div></div>
						<ContentModal>
							<TitleModal>
								Gracias por realizar tu cita en {appName}.
							</TitleModal>
							<ModalInfo>
								<span>Su cita queda en espera de confirmación.</span> Puedes ver
								el estatus y toda la información de la cita en{' '}
								<Link to="#?">Citas reservadas</Link> o en tu correo
								electrónico.
							</ModalInfo>
							<LinkReserve>
								<div className="icon">
									<CalendarIcon />
								</div>
								<div>
									<LinkButton to="/">Citas reservadas</LinkButton>
								</div>
							</LinkReserve>
						</ContentModal>
					</ContainerModal>
				</ModalBackground>
			) : null}
		</Fragment>
	);
};

export default ModalReserve;
