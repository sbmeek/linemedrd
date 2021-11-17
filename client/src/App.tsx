import { Suspense } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
	RouteComponentProps
} from 'react-router-dom';
import Header from './components/header/Header';
import routes, { RouteType } from './constants/routes';
import GlobalStyle from './styles/GlobalStyle';
import Principal from './shared/container/Container';
import useAuth from './context/auth/authContext';

function App() {
	const { user } = useAuth();

	const renderRoute = ({
		path,
		component: Component,
		requiresAuth,
		isPublic
	}: RouteType) => {
		const renderComponent = (props: RouteComponentProps<any>) =>
			user.isAuthenticated !== requiresAuth && !isPublic ? (
				<Redirect
					to={{
						pathname: requiresAuth ? '/Login' : '/Home',
						state: { from: props.location }
					}}
				/>
			) : (
				<Component />
			);

		return <Route exact key={path} path={path} render={renderComponent} />;
	};

	return (
		<div className="App">
			<GlobalStyle />
			<Router>
				<Suspense fallback={<div>Loading...</div>}>
					<Header />
					<Principal id="main">
						<Switch>{Object.values(routes).map(renderRoute)}</Switch>
					</Principal>
				</Suspense>
			</Router>
		</div>
	);
}

export default App;
