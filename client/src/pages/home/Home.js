import { useContext } from 'react';
import ThemeContext from '@/context/theme/themeContext';
import { Button, Prueba } from './Home.styles';
import { Container } from '@/shared/container/Container';
// Nunca es usado
// import { useTranslation } from 'react-i18next';

const Home = () => {
	const themeContext = useContext(ThemeContext);
	const { theme, setTheme } = themeContext;
	// const { t } = useTranslation();

	return (
		<Container>
			<Prueba>Home</Prueba>
			<Button onClick={() => setTheme(!theme)}>Cambiar Tema</Button>
		</Container>
	);
};

export default Home;
