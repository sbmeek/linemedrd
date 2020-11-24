import React, { useEffect, useState, useContext } from 'react';
import { MainContext } from 'global/context';
import axios from 'axios';
import moment from 'moment';
import {
	Container,
	Title,
	StyledCard,
	ImgStyle,
	CardBody,
	BtnPDF,
	AppointInfo,
	AppointWrapper
} from './ReservApnts.style';
//icons
import Agenda from 'assets/icons/agenda.svg';
import PDFIcon from 'components/pdfIcon/PDFIcon';
import teethIcon from 'assets/icons/teeth.svg';
import cardiogramIcon from 'assets/icons/cardiogram.svg';
import pelvisIcon from 'assets/icons/pelvis-flat.svg';
import brainIcon from 'assets/icons/brain-flat.svg';
import gynecologyIcon from 'assets/icons/gynecology.svg';
import oncologyIcon from 'assets/icons/oncology.svg';
import 'moment/locale/es-do';

moment.locale('es-do');

const specialties = [
	{
		name: 'Odontología',
		specialists: 'Odontólogos',
		color: '#60A2F8',
		icon: teethIcon,
		iconComp: 'TeethIcon'
	},
	{
		name: 'Cardiología',
		specialists: 'Cardiólogos',
		color: '#EE3A3A',
		icon: cardiogramIcon,
		iconComp: 'HeartIcon'
	},
	{
		name: 'Ortopeda',
		specialists: 'Ortopedas',
		color: '#5FD95A',
		icon: pelvisIcon,
		iconComp: 'PelvisIcon'
	},
	{
		name: 'Neurología',
		specialists: 'Neurólogos',
		color: '#6D6374',
		icon: brainIcon,
		iconComp: 'BrainIcon'
	},
	{
		name: 'Ginecología',
		specialists: 'Ginecólogos',
		color: '#ff0066',
		icon: gynecologyIcon,
		iconComp: 'GynecologyIcon'
	},
	{
		name: 'Oncología',
		specialists: 'Oncólogos',
		color: '#993399',
		icon: oncologyIcon,
		iconComp: 'OncologyIcon'
	}
];

export default function ReservApnts() {
	const [appnts, setAppnts] = useState([]);
	const { user } = useContext(MainContext).state;

	useEffect(() => {
		document.title = 'Citas Reservadas';
	}, []);

	useEffect(() => {
		(async () => {
			const { data } = await axios.get(`/appoints/readAppoints/${user['_id']}`);
			setAppnts(data['appnts']);
		})();
	}, [user]);

	const formatApptnDate = (date, drHours) => {
		const splittedDate = date.split(' ');
		const slicedDate = splittedDate.slice(0, -2);
		const joinedDate = `${slicedDate.join(' ')} ${drHours.split(' ')[1]}`;
		return joinedDate;
	};

	return (
		<Container>
			<ImgStyle src={Agenda} />
			<Title>citas reservadas</Title>
			{appnts.map((apptn, idx) => (
				<StyledCard id={idx}>
					<CardBody
						bgcolor={specialties.find((spc) => spc.name === apptn.spc).color}
					>
						<AppointInfo>
							<AppointWrapper>
								<h3>Dr. {apptn['drName']}</h3>
								Direccion del Consultorio: {apptn['consDir']}
							</AppointWrapper>
							<ImgStyle
								isTeethIcon={apptn.spc === 'Odontología'}
								src={specialties.find((spc) => spc.name === apptn.spc).icon}
							/>
						</AppointInfo>
						<AppointInfo secondRow>
							<BtnPDF>
								<PDFIcon
									color={
										specialties.find((spc) => spc.name === apptn.spc).color
									}
								/>
							</BtnPDF>
							<AppointWrapper>
								{formatApptnDate(
									moment(apptn['realization_date']).format('LLLL'),
									apptn['drHour']
								)}
							</AppointWrapper>
						</AppointInfo>
					</CardBody>
				</StyledCard>
			))}
		</Container>
	);
}
