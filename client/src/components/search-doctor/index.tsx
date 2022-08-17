import ArrowRightIcon from 'assets/icon/arrowRight_icon/ArrowRightIcon';
import CalendarIcon from 'assets/icon/calendar_icon/CalendarIcon';
import { useQueryLocation } from 'hooks/useQueryLocation';
import { ButtonNormal } from 'shared/button-normal';

import { SharedContainerScreen } from 'shared/shared-container';

import NavTop from '../nav-top';
import {
	ContentSchedule,
	ContentScheduleDate,
	WrapperDoctors,
	WrapperDoctorsList,
	WrapperDoctorsListItem,
	WrapperSchedule
} from './style';

const HomeDr = () => {
	let query = useQueryLocation();

	let date = new Date();

	console.log(query);

	return (
		<SharedContainerScreen>
			<div style={{ minHeight: '20vh' }}>
				<NavTop>
					<div>
						Debe a ver una mejor manera de integrar el buscador hablar con yefri
					</div>
					<ButtonNormal>Mapa</ButtonNormal>
				</NavTop>
			</div>
			<div style={{ minHeight: '80vh' }}>
				<WrapperSchedule>
					<ContentSchedule>
						<ContentScheduleDate>
							<CalendarIcon height="1.3rem" width="1.3rem" />
							{/* {`${date.getDay() + 1}, ${date.getDate()} de ${date.getMonth()}`} */}
							{'Juev, 17 de Junio'}
						</ContentScheduleDate>
						<ArrowRightIcon
							className="icon-left"
							transform="rotate(180deg)"
							height="1.3rem"
							width="1.3rem"
						/>
						<ArrowRightIcon
							className="icon-right"
							height="1.3rem"
							width="1.3rem"
						/>
					</ContentSchedule>
				</WrapperSchedule>
				<WrapperDoctors>
					<WrapperDoctorsList>
						<WrapperDoctorsListItem>
							<img className="imgCard" src="pic_trulli.jpg" alt="Trulli" />
							<div className="detailsCard">
								<div>Dra. Dulce Mcarthur Mustafa</div>
								<div>Oftalmóloga</div>
								<div>75401 Jazmyne Circles Suite 841 - Casper, MI / 74622</div>
								<div>El siguiente día disponible es el sábado, Jun 19</div>
							</div>
							<div className="lineCard" />
							<div className="buttonCard">
								Agendar una cita para el sábado, Jun 19
							</div>
						</WrapperDoctorsListItem>
					</WrapperDoctorsList>
				</WrapperDoctors>
			</div>
		</SharedContainerScreen>
	);
};

export default HomeDr;
