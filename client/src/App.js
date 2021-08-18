import { gql, useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect
} from 'react-router-dom';
import Header from './components/header/Header';
import routes from './constants/routes';
import GlobalStyle from './styles/GlobalStyle';
import Principal from '@/shared/container/Container';
import './App.css';

const IS_LOGGED_IN = gql`
	query IsUserLoggedIn {
		isLoggedIn @client
	}
`;

function App() {
	const {
		data: { isLoggedIn }
	} = useQuery(IS_LOGGED_IN);
	const { t, i18n } = useTranslation();

	function handleLangChange(lang) {
		i18n.changeLanguage(lang);
	}

	const renderRoute = ({ path, component: Component, requiresAuth }) => {
		const renderComponent = props =>
			isLoggedIn !== requiresAuth ? (
				<Redirect
					to={{
						pathname: requiresAuth ? '/Login' : '/HomeWithoutHeader',
						state: { from: props.location }
					}}
				/>
			) : (
				<Component />
			);

		return <Route exact key={path} path={path} render={renderComponent} />;
	};

	return (
		<Principal id="main">
			<GlobalStyle />
			<Router>
				<Suspense fallback={<div>Loading...</div>}>
					<Header />
					<div className="App">
						<div>
							<button onClick={() => handleLangChange('es')}>
								{t('button.spanish')}
							</button>
							<button onClick={() => handleLangChange('en')}>
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
						<Switch>{Object.values(routes).map(renderRoute)}</Switch>
					</div>
				</Suspense>
			</Router>
		</Principal>
	);
}

export default App;
