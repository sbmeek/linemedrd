import React, { useEffect } from 'react';
import {
	Container,
	Title,
	ImgStyle,
	StyledCard,
	CardBody,
	TextWrapper,
	DrInfo,
	DrName
} from './Specialities.style';
import HeartIcon from 'components/heartIcon/HeartIcon';
import Dr from 'assets/icons/dr.svg';

export default function Specialities() {
	useEffect(() => {
		document.title = 'Especialistas';
	}, []);

	return (
		<Container>
			<HeartIcon color="#66d2bc" />
			<Title>Cardi&oacute;logos</Title>
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
