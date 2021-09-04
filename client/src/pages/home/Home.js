import { Fragment, useState } from 'react';
import {
	Button,
	Parrafo,
	ContainerHome,
	HomeTitle,
	ContentCard,
	Card
} from './Home.styles';
import Title from '@/shared/title/Title';

import { Container, ContainerSection } from '@/shared/container/Container';
import ModalReserve from '@/components/modal/ModalReserve/ModalReserve';
// import { useTranslation } from 'react-i18next';

const Home = () => {
	// const { t } = useTranslation();

	const [showModal, setShowModal] = useState(false);
	const handleModal = () => {
		setShowModal(prev => !prev);
		console.log(showModal);
	};
	return (
		<Fragment>
			{/* This a Test to the first modal */}
			<ModalReserve showModal={showModal} setShowModal={setShowModal} />
			<ContainerHome {...{ index: 4, heigth: '30vh' }}>
				<Container>
					<Title>Realiza tu cita desde la comodidad de tu casa.</Title>
					<Parrafo>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</Parrafo>
					<Button>Quiero empezar mi busqueda</Button>
				</Container>
			</ContainerHome>
			<ContainerHome {...{ index: 3, heigth: '60vh' }} className="hideTop">
				<ContainerSection>
					<HomeTitle>Especialidades</HomeTitle>
					<ContentCard>
						{/* Esto va hacer un componente llamado card donde se va a iterar */}
						<Card>
							<div className="card-content">
								<div className="card-body"></div>
								<div className="card-footer">
									<div>Dermatologia</div>
								</div>
							</div>
						</Card>
						<Card>Urologia</Card>
						<Card>Dentista</Card>
						<Card>Bionalista</Card>
					</ContentCard>
					<Button onClick={handleModal}>Ver todas las especialidades</Button>
				</ContainerSection>
			</ContainerHome>
			<ContainerHome
				{...{ index: 2, heigth: '40vh' }}
				className="hideTop"
			></ContainerHome>
			<ContainerHome
				{...{ index: 1, heigth: '30vh' }}
				className="hideTop"
			></ContainerHome>
		</Fragment>
	);
};

export default Home;
