import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/header/Header';
import routes from './constants/routes';
import GlobalStyle from './styles/GlobalStyle';
import Principal from '@/shared/container/Container';
import './App.css';

function App() {
	const { t, i18n } = useTranslation();
	function handleClick(lang) {
		i18n.changeLanguage(lang);
	}
	return (
		<Principal id="main">
			<GlobalStyle />
			<Router>
				<Suspense fallback={<div>Loading...</div>}>
					<Header />
					<div className="App">
						<div>
							<button onClick={() => handleClick('es')}>
								{t('button.spanish')}
							</button>
							<button onClick={() => handleClick('en')}>
								{t('button.english')}
							</button>
						</div>
						<ul>
							{Object.entries(routes).map(([key, route]) => (
								<li key={route.path}>
									<Link to={route.path}>
										{key[0].toUpperCase() + key.substring(1)}
									</Link>
								</li>
							))}
						</ul>

						<hr />
						<Switch>
							{Object.values(routes).map(route => (
								<Route
									exact
									key={route.path}
									path={route.path}
									component={route.component}
								/>
							))}
						</Switch>
					</div>
				</Suspense>
			</Router>
		</Principal>
	);
}

export default App;
