import React from 'react';
import teethIcon from 'assets/icons/teeth.svg';
import cardiogramIcon from 'assets/icons/cardiogram.svg';
import pelvisIcon from 'assets/icons/pelvis-flat.svg';
import brainIcon from 'assets/icons/brain-flat.svg';
import gynecologyIcon from 'assets/icons/gynecology.svg';
import oncologyIcon from 'assets/icons/oncology.svg';
import {
	Container,
	CoverWrapper,
	BgContainer,
	CoverContent,
	CompanyTitle,
	CompanyDescription,
	SpecialtiesContainer,
	BtnSpecialty,
	CardsWrapper,
	CardContainer,
	SpecialtyIcon
} from './Main.style';

const specialties = [
	{
		name: 'Odontología',
		color: '#60A2F8',
		icon: teethIcon
	},
	{
		name: 'Cardiología',
		color: '#EE3A3A',
		icon: cardiogramIcon
	},
	{
		name: 'Ortopeda',
		color: '#5FD95A',
		icon: pelvisIcon
	},
	{
		name: 'Neurología',
		color: '#6D6374',
		icon: brainIcon
	},
	{
		name: 'Ginecología',
		color: '#ff0066',
		icon: gynecologyIcon
	},
	{
		name: 'Oncología',
		color: '#993399',
		icon: oncologyIcon
	}
];

export default function Main() {
	return (
		<Container>
			<CoverWrapper>
				<BgContainer />
				<CoverContent>
					<CompanyTitle>Centro M&eacute;dico A&M</CompanyTitle>
					<CompanyDescription>
						Somos un centro fundado por m&eacute;dicos visionarios y
						apasionados, d&iacute;a a d&iacute;a luchamos por mejorar y
						brindarle a nuestros pacientes el servicio m&aacute;s excelente.
					</CompanyDescription>
					<SpecialtiesContainer>
						{specialties.map((specialty, idx) => (
							<BtnSpecialty key={idx}>{specialty.name}</BtnSpecialty>
						))}
					</SpecialtiesContainer>
				</CoverContent>
			</CoverWrapper>
			<CardsWrapper>
				{specialties.map((specialty, idx) => (
					<CardContainer key={idx} bgColor={specialty.color}>
						<SpecialtyIcon
							src={specialty.icon}
							isTeethIcon={specialty.name === 'Odontología'}
						/>
						<span>{specialty.name}</span>
					</CardContainer>
				))}
			</CardsWrapper>
		</Container>
	);
}
