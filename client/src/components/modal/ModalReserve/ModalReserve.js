import Link from '@/shared/link/Link';
import { appName } from '@/constants';
import {
	TitleModal,
	ModalInfo,
	LinkReserve,
	ContainerModal,
	ContentModal,
	LinkButton
} from './ModalReserve.styles';
import { Fragment } from 'react';
import CalendarIcon from '@/assets/icon/calendar_icon/CalendarIcon';

const ModalReserve = () => {
	return (
		<Fragment>
			<ContainerModal>
				<ContentModal>
					<TitleModal>Gracias por realizar tu cita en {appName}.</TitleModal>
					<ModalInfo>
						<span>Su cita queda en espera de confirmación.</span> Puedes ver el
						estatus y toda la información de la cita en{' '}
						<Link to="#?">Citas reservadas</Link> o en tu correo electrónico.
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
		</Fragment>
	);
};

export default ModalReserve;
