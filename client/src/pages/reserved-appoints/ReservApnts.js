import React, { useEffect } from 'react';
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
import Agenda from 'assets/icons/agenda.svg';
import Heart from 'assets/icons/cardiogram.svg';
import PDFIcon from 'components/pdfIcon/PDFIcon';

export default function ReservApnts() {
	useEffect(() => {
		document.title = 'Citas Reservadas';
	}, []);

	return (
		<Container>
			<ImgStyle src={Agenda} />
			<Title>citas reservadas</Title>
			<StyledCard>
				<CardBody bgColor="#ff6363">
					<AppointInfo>
						<AppointWrapper>
							<h3>Dr. Balaguer</h3>
							Direccion del Consultorio: Av. Independencia casi esq. Dr. Delgado
						</AppointWrapper>
						<ImgStyle src={Heart} />
					</AppointInfo>
					<AppointInfo secondRow>
						<BtnPDF>
							<PDFIcon color="#ff6363" />
						</BtnPDF>
						<AppointWrapper>
							Lunes 10 de Noviembre del Año 2020 a las 4:00PM
						</AppointWrapper>
					</AppointInfo>
				</CardBody>
			</StyledCard>
		</Container>
	);
}
