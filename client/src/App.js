import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Dashboard = lazy(() => import('@/pages/Dashboard'));

function App() {
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
					</Switch>
				</div>
			</Suspense>
		</Router>
	);
}

export default App;
