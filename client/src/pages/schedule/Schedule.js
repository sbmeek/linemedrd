import React, { useState } from 'react';
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
import calendar from 'assets/icons/calendar.svg';
import heart from 'assets/icons/cardiogram.svg';
import CheckIcon from 'components/icons/checkIcon/CheckIcon';
import Clipboard from 'components/icons/clipboardIcon/ClipboardIcon';
import Pending from 'components/icons/pending/PendingIcon';

export default function Schedule() {
	const [selectedTab, setSelectedTab] = useState(0);

	const handleChange = (_evt, newTabIdx) => {
		setSelectedTab(newTabIdx);
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
					<CardBody bgcolor="#66d2bc">
						<TextWrapper>
							<PatName>Alexandra Tudela</PatName>
							Numero: (829) 162-1311 <br />
							Cedula: 001-2346543-2 <br />
							Email: alexa01@gmail.com <br />
							<br />
							Lunes 18 de noviembre del año 2020 a las 7:00pm
						</TextWrapper>
						<IconWrapper>
							<IconStyle src={heart} />
						</IconWrapper>
					</CardBody>
				</TabPanel>

				<TabPanel value={selectedTab} index={1}>
					<CardBody bgcolor="#EE3A3A">
						<TextWrapper>
							<PatName>Alexandra Tudela</PatName>
							Numero: (829) 162-1311 <br />
							Cedula: 001-2346543-2 <br />
							Email: alexa01@gmail.com <br />
							18/11/20 - 7:00pm <br />
							<br />
							<BtnCancel>Declinar</BtnCancel>
							<BtnAccept>Aceptar</BtnAccept>
						</TextWrapper>
						<IconWrapper>
							<IconStyle src={heart} />
						</IconWrapper>
					</CardBody>
				</TabPanel>

				<TabPanel value={selectedTab} index={2}>
					Item Three
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
			{value === index && <StyledCard>{children}</StyledCard>}
		</div>
	);
}

function a11yProps(index) {
	return {
		id: `tab-${index}`,
		'aria-controls': `tabpanel-${index}`
	};
}
