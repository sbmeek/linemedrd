import { Fragment, useContext } from 'react';
import ThemeContext from '@/context/theme/themeContext';
import { Button, Parrafo, ContainerHome } from './Home.styles';
// import { Container } from '@/shared/container/Container';
import Title from '@/shared/title/Title';
import { Container } from '@/shared/container/Container';
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
					<Title>Realiza tu cita desde la comodidad de tu casa.</Title>
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
				<div>
					<h3>Especialidades</h3>
				</div>
				<div>
					<div></div>
				</div>
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
