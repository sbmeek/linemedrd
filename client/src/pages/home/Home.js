import { useContext } from 'react';
import ThemeContext from '@/context/theme/themeContext';
import { Button, Prueba } from './Home.styles';

const Home = () => {
	const themeContext = useContext(ThemeContext);
	const { theme, setTheme } = themeContext;

	return (
		<div>
			<Prueba>Home</Prueba>
			<Button onClick={() => setTheme(!theme)}>Cambiar Tema</Button>
		</div>
	);
};

export default Home;
