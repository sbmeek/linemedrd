import { Fragment, useContext } from 'react';
import ThemeContext from '@/context/theme/themeContext';
import {
	Button,
	Parrafo,
	ContainerHome,
	HomeTitle,
	ContentCard,
	Card,
	TitleHeadHome
} from './Home.styles';
// import { Container } from '@/shared/container/Container';
import { Container, ContainerSection } from '@/shared/container/Container';
// Nunca es usado
// import { useTranslation } from 'react-i18next';

const Home = () => {
	const themeContext = useContext(ThemeContext);
	const { theme, setTheme } = themeContext;
	// const { t } = useTranslation();

	return (
		<Fragment>
			<ContainerHome {...{ index: 4, heigth: '30vh' }}>
				<Container>
					<TitleHeadHome>
						Realiza tu cita desde la comodidad de tu casa.
					</TitleHeadHome>
					<Parrafo>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</Parrafo>
					<Button onClick={() => setTheme(!theme)}>
						Quiero empezar mi busqueda
					</Button>
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
					<Button>Ver todas las especialidades</Button>
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
