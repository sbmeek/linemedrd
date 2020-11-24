import React, { useEffect } from 'react';
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
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function Specialities() {
	const {
		state: { specialty }
	} = useLocation();
	const [doctors, setDoctors] = useState([]);

	useEffect(() => {
		document.title = specialty.specialists;
	}, [specialty.specialists]);

	useEffect(() => {
		(async () => {
			const { data } = await axios.get('/dotores/todos/bobo');
			setDoctors(data);
		})();
	}, []);

	return (
		<Container>
			<SpecialityIcon src={specialty.icon} />
			<Title>{specialty.specialists}</Title>
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
		</Container>
	);
}
