import Title from 'shared/title';

import {
	SharedContainer,
	SharedContainerSection
} from 'shared/shared-container';

import routes from 'constants/routes';
import {
	Button,
	Card,
	ContainerHome,
	ContentCard,
	HomeTitle,
	LinkButton,
	Parrafo
} from './styles';

const Home = () => (
	<>
		{/* This a Test to the first modal */}
		<ContainerHome index={4} heigth="30vh">
			<SharedContainer>
				<Title>Realiza tu cita desde la comodidad de tu casa.</Title>
				<Parrafo>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</Parrafo>
				<LinkButton to={routes.searchDr.path}>
						Quiero empezar mi busqueda
				</LinkButton>
			</SharedContainer>
		</ContainerHome>
		<ContainerHome index={3} heigth="60vh" className="hideTop">
			<SharedContainerSection>
				<HomeTitle>Especialidades</HomeTitle>
				<ContentCard>
					{/* Esto va hacer un componente llamado card donde se va a iterar */}
					<Card>
						<div className="card-content">
							<div className="card-body" />
							<div className="card-footer">
								<div>Dermatologia</div>
							</div>
						</div>
					</Card>
					<Card>Urologia</Card>
					<Card>Dentista</Card>
					<Card>Bionalista</Card>
				</ContentCard>
				<Button>Ver todas las especialidades</Button>
			</SharedContainerSection>
		</ContainerHome>
		<ContainerHome
			index={2}
			heigth="40vh"
			className="hideTop"
		/>
		<ContainerHome
			index={1}
			heigth="30vh"
			className="hideTop"
		/>
	</>
);

export default Home;
