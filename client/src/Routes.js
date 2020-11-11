import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loader from './components/loader/Loader';

const Main = lazy(() => import('pages/main/Main'));
const Login = lazy(() => import('pages/login/Login'));
const Register = lazy(() => import('pages/register/Register'));

export default function Routes() {
	useEffect(() => {
		setTimeout(() => {
			document.querySelector('#loader').remove();
			document.querySelector('#loader-style').remove();
		}, 1600);
	}, []);

	return (
		<Router>
			<Suspense fallback={<Loader />}>
				<Route exact path="/" component={Main}></Route>
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
			</Suspense>
		</Router>
	);
}
