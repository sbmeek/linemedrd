import React, { useEffect, useState, useContext, useCallback } from 'react';
import { MainContext } from 'global/context';
import axios from 'axios';
import moment from 'moment';
import {
	Container,
	Title,
	ImgStyle,
	StyPaper,
	StyTab,
	StyTabs,
	StyledCard,
	CardBody,
	TextWrapper,
	PatName,
	IconWrapper,
	IconStyle,
	BtnCancel,
	BtnAccept
} from './Schedule.style';
//icons
import calendar from 'assets/icons/calendar.svg';
import CheckIcon from 'components/icons/checkIcon/CheckIcon';
import Clipboard from 'components/icons/clipboardIcon/ClipboardIcon';
import Pending from 'components/icons/pending/PendingIcon';
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

export default function Schedule() {
	const [selectedTab, setSelectedTab] = useState(0);
	const [pending, setPending] = useState([]);
	const [confirmed, setConfirmed] = useState([]);
	const [done, setDone] = useState([]);
	const { user } = useContext(MainContext).state;

	const handleChange = (_evt, newTabIdx) => {
		setSelectedTab(newTabIdx);
	};

	const updateContent = useCallback(() => {
		const getDataByStatus = async (status) => {
			const { data } = await axios.get(
				`/schedules/readStatus/${user['_id']}/${status}`
			);
			return data['schedule'];
		};
		(async () => {
			let data = await getDataByStatus('Pendiente');
			setPending(data);
			data = await getDataByStatus('Confirmada');
			setConfirmed(data);
			data = await getDataByStatus('Realizada');
			setDone(data);
		})();
	}, [user]);

	useEffect(() => {
		updateContent();
	}, [updateContent]);

	const updateStatus = async (ApId, ConId, newStatus) => {
		await axios.put(`/schedules/upAppointSt/${ConId}/${ApId}`, {
			status: newStatus
		});
		updateContent();
	};

	const formatApptnDate = (date, drHours) => {
		const splittedDate = date.split(' ');
		const slicedDate = splittedDate.slice(0, -2);
		const joinedDate = `${slicedDate.join(' ')} ${drHours.split(' ')[1]}`;
		return joinedDate;
	};

	return (
		<Container>
			<ImgStyle src={calendar} />
			<Title>Agenda</Title>
			<StyPaper square>
				<StyTabs
					value={selectedTab}
					onChange={handleChange}
					variant="fullWidth"
				>
					<StyTab
						icon={<Pending color="#66d2bc" />}
						label="Próximas"
						color="#66d2bc"
						{...a11yProps(0)}
					/>
					<StyTab
						icon={<Clipboard color="#EE3A3A" />}
						label="Pendientes"
						color="#EE3A3A"
						{...a11yProps(1)}
					/>
					<StyTab
						icon={<CheckIcon color="gray" />}
						label="Realizadas"
						color="gray"
						{...a11yProps(2)}
					/>
				</StyTabs>
				<TabPanel value={selectedTab} index={0}>
					{confirmed.length > 0 &&
						confirmed.map((sch, idx) => (
							<StyledCard id={idx}>
								<CardBody bgcolor="#66d2bc">
									<TextWrapper>
										<PatName>
											{sch['patName']} {sch['patLastn']}
										</PatName>
										Número de afiliado: {sch['patNIns']} <br />
										Cedula: {sch['patIdCard']} <br />
										Email: {sch['patEmail']} <br />
										<br />
										{formatApptnDate(
											moment(sch['appntDate']).format('LLLL'),
											sch['drHour']
										)}
									</TextWrapper>
									<IconWrapper>
										<IconStyle
											isTeethIcon={sch.drSpc === 'Odontología'}
											src={
												specialties.find((spc) => spc.name === sch.drSpc).icon
											}
										/>
										<BtnAccept
											onMouseDown={() =>
												updateStatus(sch['appntID'], sch['consID'], 'Realizada')
											}
										>
											Realizada
										</BtnAccept>
									</IconWrapper>
								</CardBody>
							</StyledCard>
						))}
				</TabPanel>

				<TabPanel value={selectedTab} index={1}>
					{pending.length > 0 &&
						pending.map((sch, idx) => (
							<StyledCard id={idx}>
								<CardBody bgcolor="#EE3A3A">
									<TextWrapper>
										<PatName>
											{sch['patName']} {sch['patLastn']}
										</PatName>
										Número de afiliado: {sch['patNIns']} <br />
										Cedula: {sch['patIdCard']} <br />
										Email: {sch['patEmail']} <br />
										<br />
										{formatApptnDate(
											moment(sch['appntDate']).format('LLLL'),
											sch['drHour']
										)}
										<br />
										<BtnCancel
											onMouseDown={() =>
												updateStatus(sch['appntID'], sch['consID'], 'Cancelada')
											}
										>
											Declinar
										</BtnCancel>
										<BtnAccept
											onMouseDown={() =>
												updateStatus(
													sch['appntID'],
													sch['consID'],
													'Confirmada'
												)
											}
										>
											Aceptar
										</BtnAccept>
									</TextWrapper>
									<IconWrapper>
										<IconStyle
											isTeethIcon={sch.drSpc === 'Odontología'}
											src={
												specialties.find((spc) => spc.name === sch.drSpc).icon
											}
										/>
									</IconWrapper>
								</CardBody>
							</StyledCard>
						))}
				</TabPanel>

				<TabPanel value={selectedTab} index={2}>
					{done.length > 0 &&
						done.map((sch, idx) => (
							<StyledCard id={idx}>
								<CardBody bgcolor="#808080">
									<TextWrapper>
										<PatName>
											{sch['patName']} {sch['patLastn']}
										</PatName>
										Número de afiliado: {sch['patNIns']} <br />
										Cedula: {sch['patIdCard']} <br />
										Email: {sch['patEmail']} <br />
										<br />
										{formatApptnDate(
											moment(sch['appntDate']).format('LLLL'),
											sch['drHour']
										)}
									</TextWrapper>
									<IconWrapper>
										<IconStyle
											isTeethIcon={sch.drSpc === 'Odontología'}
											src={
												specialties.find((spc) => spc.name === sch.drSpc).icon
											}
										/>
									</IconWrapper>
								</CardBody>
							</StyledCard>
						))}
				</TabPanel>
			</StyPaper>
		</Container>
	);
}

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <>{children}</>}
		</div>
	);
}

function a11yProps(index) {
	return {
		id: `tab-${index}`,
		'aria-controls': `tabpanel-${index}`
	};
}
