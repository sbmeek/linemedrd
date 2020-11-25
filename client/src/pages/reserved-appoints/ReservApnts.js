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
import {
	Page,
	Text,
	Document,
	StyleSheet
} from '@react-pdf/renderer';
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
				<StyledCard key={idx}>
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
							<BtnPDF
								document={<AppointDocPDF apptn={apptn} />}
								fileName={`cita-${apptn['drName']}-fecha-${apptn['realization_date']}.pdf`}
							>
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

const AppointDocPDF = (props) => {
	const { apptn } = props;

	const styles = StyleSheet.create({
		page: {
			display: 'flex',
			alignItems: 'center',
			paddingTop: 35,
			paddingBottom: 65
		},
		title: {
			fontSize: 30,
			fontWeight: 'ultrabold'
		},
		subtitle: {
			fontSize: 28,
			marginBottom: 10
		},
		txt: {
			fontWeight: 'ultrabold',
			marginTop: 7
		}
	});

	return (
		<Document>
			<Page size="A4" style={styles.page}>
				<Text style={styles.title}>Centro Médico A&M</Text>
				<Text style={styles.subtitle}>Informe de Cita</Text>
				<Text style={styles.txt}>Nombre del doctor: {apptn['drName']}</Text>
				<Text style={styles.txt}>Fecha de Realizaci&oacute;n: {new Date(apptn['realization_date']).toLocaleDateString()}</Text>
				<Text style={styles.txt}>Direcci&oacute;n del consultorio: {apptn['consDir']}</Text>
				<Text style={styles.txt}>Horario del doctor: {apptn['drHour']}</Text>
				<Text style={styles.txt}>Especialidad del doctor: {apptn['spc']}</Text>
				<Text style={styles.txt}>Fecha de Emisi&oacute;n: {new Date(apptn['emission_date']).toLocaleDateString()}</Text>
				<Text style={styles.txt}>Costo de consulta: {apptn['payment']}</Text>
				<Text style={styles.txt}>Pago con seguro: {apptn['ins_validation'] ? 'Sí' : 'No'}</Text>
			</Page>
		</Document>
	);
};
