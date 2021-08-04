import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import GlobalStyle from './styles/GlobalStyle';

const Home = lazy(() => import('@/pages/home/Home'));
const Login = lazy(() => import('@/pages/login/Login'));
const Signup = lazy(() => import('@/pages/signup/Signup'));
const About = lazy(() => import('@/pages/About'));
const Dashboard = lazy(() => import('@/pages/Dashboard'));

function App() {
	return (
		<div>
			<GlobalStyle />
			<Router>
				<Suspense fallback={<div>Loading...</div>}>
					<div className="App">
						<Header />
						<ul>
							<li>
								<Link to="/Login">Login</Link>
							</li>
							<li>
								<Link to="/Signup">Signup</Link>
							</li>
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
							<Route exact path="/" component={Home} />
							<Route path="/about" component={About} />
							<Route path="/dashboard" component={Dashboard} />
							<Route path="/Login" component={Login} />
							<Route path="/signup" component={Signup} />
						</Switch>
					</div>
				</Suspense>
			</Router>
		</div>
	);
}

export default App;
