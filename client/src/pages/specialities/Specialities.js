import React, { useEffect, useState } from 'react';
import {
	SpecialityIcon,
	Container,
	Title,
	ImgStyle,
	StyledCard,
	CardBody,
	TextWrapper,
	DrInfo,
	DrName
} from './Specialities.style';
import Dr from 'assets/icons/dr.svg';
import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Specialities() {
	const {
		state: { specialty }
	} = useLocation();
	const history = useHistory();
	const [doctors, setDoctors] = useState([]);

	useEffect(() => {
		document.title = specialty.specialists;
	}, [specialty.specialists]);

	useEffect(() => {
		(async () => {
			const { data } = await axios.get(`/doctors/readSpc/${specialty.name}`);
			setDoctors(data['drs']);
		})();
	}, [specialty.name]);

	const handleCardMouseDown = (_e, dr) => {
		history.push('/regAppoint', dr);
	};

	return (
		<Container>
			<SpecialityIcon src={specialty.icon} />
			<Title>{specialty.specialists}</Title>
			{doctors.map((dr, idx) => (
				<StyledCard
					onMouseDown={(e) => handleCardMouseDown(e, dr)}
					color={idx % 2 === 0 ? '#005e4b' : '#85f2dc'}
					key={idx}
				>
					<CardBody bgcolor={idx % 2 === 0 ? '#85f2dc' : '#005e4b'}>
						<DrInfo>
							<ImgStyle src={Dr} />
							<TextWrapper>
								<DrName>{dr['name']}</DrName>
								Consultorio: {dr['Cons_name']}
								<br />
								Horario: {dr['horary']}
							</TextWrapper>
						</DrInfo>
					</CardBody>
				</StyledCard>
			))}
		</Container>
	);
}
/*
<StyledCard color="#005e4b">
				<CardBody bgcolor="#85f2dc">
					<DrInfo>
						<ImgStyle src={Dr} />
						<TextWrapper>
							<DrName>Ezequiel Balaguer </DrName>
							Consultorio: Dr. Balaguer <br />
							Horario: Lunes a viernes de 8:00am a 4:00pm
						</TextWrapper>
					</DrInfo>
				</CardBody>
			</StyledCard>
*/
