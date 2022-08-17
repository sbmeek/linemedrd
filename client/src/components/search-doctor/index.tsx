import ArrowRightIcon from 'assets/icon/arrowRight_icon/ArrowRightIcon';
import CalendarIcon from 'assets/icon/calendar_icon/CalendarIcon';
import PointMapIcon from 'assets/icon/pointMap_icon/PointMapIcon';
import Search from 'assets/icon/search_icon/SearchIcon';
import { useQueryLocation } from 'hooks/useQueryLocation';

import { SharedContainerScreen } from 'shared/shared-container';

import NavTop from '../nav-top';
import {
	ButtonSearchDoctor,
	ContentDoctorsItem,
	ContentSchedule,
	ContentScheduleDate,
	WrapperDoctors,
	WrapperDoctorsItem,
	WrapperSchedule
} from './styles';

const HomeDr = () => {
	let query = useQueryLocation();

	let date = new Date();

	console.log(query);

	return (
		<SharedContainerScreen>
			<NavTop>
				<div style={{ display: 'flex', gap: '0.5rem' }}>
					<ButtonSearchDoctor className="light">
						<Search /> Buscar
					</ButtonSearchDoctor>
					<ButtonSearchDoctor>
						<PointMapIcon /> Mapa
					</ButtonSearchDoctor>
				</div>
			</NavTop>
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
					<WrapperDoctorsItem>
						<ContentDoctorsItem>
							<figure>
								<img
									src="https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg"
									alt="img-del-dr-trujillo"
								/>
								<figcaption>
									<h3>Dra. Dulce Mcarthur Mustafa</h3>
									<h4>Oftalmóloga</h4>
									<p>
										<PointMapIcon /> 75401 Jazmyne Circles Suite 841 - Casper,
										MI / 74622
									</p>
									<p>El siguiente día disponible es el sábado, Jun 19</p>
								</figcaption>
							</figure>
							<div className="lineCard" />
							<ButtonSearchDoctor>
								Agendar una cita para el sábado, Jun 19
							</ButtonSearchDoctor>
						</ContentDoctorsItem>
					</WrapperDoctorsItem>
					<WrapperDoctorsItem>
						<ContentDoctorsItem>
							<figure>
								<img
									src="https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg"
									alt="img-del-dr-trujillo"
								/>
								<figcaption>
									<h3>Dra. Dulce Mcarthur Mustafa</h3>
									<h4>Oftalmóloga</h4>
									<p>
										<PointMapIcon /> 75401 Jazmyne Circles Suite 841 - Casper,
										MI / 74622
									</p>
									<p>El siguiente día disponible es el sábado, Jun 19</p>
								</figcaption>
							</figure>
							<div className="lineCard" />
							<ButtonSearchDoctor>
								Agendar una cita para el sábado, Jun 19
							</ButtonSearchDoctor>
						</ContentDoctorsItem>
					</WrapperDoctorsItem>
					<WrapperDoctorsItem>
						<ContentDoctorsItem>
							<figure>
								<img
									src="https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg"
									alt="img-del-dr-trujillo"
								/>
								<figcaption>
									<h3>Dra. Dulce Mcarthur Mustafa</h3>
									<h4>Oftalmóloga</h4>
									<p>
										<PointMapIcon /> 75401 Jazmyne Circles Suite 841 - Casper,
										MI / 74622
									</p>
									<p>El siguiente día disponible es el sábado, Jun 19</p>
								</figcaption>
							</figure>
							<div className="lineCard" />
							<ButtonSearchDoctor>
								Agendar una cita para el sábado, Jun 19
							</ButtonSearchDoctor>
						</ContentDoctorsItem>
					</WrapperDoctorsItem>
				</WrapperDoctors>
			</div>
		</SharedContainerScreen>
	);
};

export default HomeDr;
