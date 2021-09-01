import { Container } from '@/shared/container/Container';
import Title from '@/shared/title/Title';
import Link, { ContentLink } from '@/shared/link/Link';
import { appName } from '@/constants';

const NotificationReserve = () => {
	return (
		<Container>
			<div>
				<Title>Gracias por realizar tu cita en {appName}.</Title>
				<div className="inf-reservation">
					<span>Su cita queda en espera de confirmación.</span>Puedes ver el
					estatus y toda la información de la cita en Citas reservadas o en tu
					correo electrónico.
				</div>
				<div>
					<div>
						<div className="icon"></div>
						<ContentLink>
							<Link to="#?">Citas reservadas</Link>
						</ContentLink>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default NotificationReserve;
