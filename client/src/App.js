import { AppContainer } from './App.style';
import { GlobalStyle } from './global.style';
import Routes from './Routes';

function App() {
	return (
		<>
			<GlobalStyle />
			<AppContainer>
				<Routes />
			</AppContainer>
		</>
	);
}

export default App;
