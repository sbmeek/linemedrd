import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

const Home = lazy(() => import('@/pages/Home'));
const Login = lazy(() => import('@/pages/Login'));
const About = lazy(() => import('@/pages/About'));
const Dashboard = lazy(() => import('@/pages/Dashboard'));

function App(props) {
	var IsVisible = props.IsVisible;
	IsVisible = true
	if(IsVisible){

	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<div className="App">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/dashboard">Dashboard</Link>
						</li>
					</ul>

					<hr />

					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/dashboard">
							<Dashboard />
						</Route>
						<Route path="/Login">
							<Login />
						</Route>
					</Switch>
				</div>
			</Suspense>
		</Router>
	);}
	return(
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<div className="App">
				
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/dashboard">
							<Dashboard />
						</Route>
						<Route path="/Login">
							<Login />
						</Route>
					</Switch>
				</div>
			</Suspense>
		</Router>
	);
}

export default App;
