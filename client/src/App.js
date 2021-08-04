import { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/header/Header';
import routes from './constants/routes';
import GlobalStyle from './styles/GlobalStyle';
import './App.css';

function App() {
	return (
		<div>
			<GlobalStyle />
			<Router>
				<Suspense fallback={<div>Loading...</div>}>
					<div className="App">
						<Header />
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
		</div>
	);
}

export default App;
