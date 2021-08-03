// @ts-nocheck
import { useContext } from 'react';
import styled from '@emotion/styled';
import ThemeContext from '../context/theme/themeContext';

const Prueba = styled.div`
	@font-face {
		font-family: letra1;
		src: url(${({ theme }) => theme.fonts.neufreit});
	}

	${({ theme }) => ({
		color: theme.colors.green2,
		background: theme.colors.green1
	})};
	font-family: letra1;
	font-size: large;
`;

const Button = styled.button`
	@font-face {
		font-family: letra2;
		src: url(${({ theme }) => theme.fonts.segoeuiBold});
	}

	color: ${props => props.theme.colors.white};
	background-color: ${props => props.theme.colors.green3};
	border: none;
	border-radius: 1rem;
	margin: 2rem;
	padding: 0.5rem;
	font-family: letra2;

	&:hover {
		background-color: ${props => props.theme.colors.green2};
	}
`;

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
