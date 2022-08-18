import ArrowRightIcon from 'assets/icon/arrowRight_icon/ArrowRightIcon';
import CalendarIcon from 'assets/icon/calendar_icon/CalendarIcon';
import PointMapIcon from 'assets/icon/pointMap_icon/PointMapIcon';
import Search from 'assets/icon/search_icon/SearchIcon';
import { Doctor } from 'graphql/types';
import { useQueryLocation } from 'hooks/useQueryLocation';
import React, { PropsWithChildren } from 'react';

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

interface ISearchDoctor {
	setIsSearch: React.Dispatch<React.SetStateAction<boolean>>;
	doctors?: Doctor[];
}

const SearchDoctor = <T extends PropsWithChildren<ISearchDoctor>>({
	setIsSearch,
	doctors
}: T) => {
	// let query = useQueryLocation();

	// let date = new Date();

	// console.log(query);

	return (
		<SharedContainerScreen>
			<NavTop>
				<div style={{ display: 'flex', gap: '0.5rem' }}>
					<ButtonSearchDoctor
						onClick={() => setIsSearch(prev => !prev)}
						className="light"
					>
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
					{doctors?.map(doctor => (
						<WrapperDoctorsItem key={doctor._id}>
							<ContentDoctorsItem>
								<figure>
									<img
										src={
											Array.isArray(doctor.imageUrl)
												? doctor.imageUrl[0]
												: doctor.imageUrl
										}
										alt="img-del-dr-trujillo"
									/>
									<figcaption>
										<h3>
											{doctor.user.name} {doctor.user.lastname}
										</h3>
										<h4>{doctor.specialties[0].description}</h4>
										<p>
											<PointMapIcon /> {doctor.workday[0].adress.street}{' '}
											{doctor.workday[0].adress.sector}{' '}
											{doctor.workday[0].adress.city}{' '}
											{doctor.workday[0].adress.province}
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
					))}
				</WrapperDoctors>
			</div>
		</SharedContainerScreen>
	);
};

export default SearchDoctor;
