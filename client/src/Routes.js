import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Loader from './components/loader/Loader';

const AuthRoute = lazy(() => import('components/authRoute/AuthRoute'));
const UnauthRoute = lazy(() => import('components/unauthRoute/UnauthRoute'));
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
				<AuthRoute exact redirectTo="/login" path="/" component={Main} />
				<UnauthRoute redirectTo="/" path="/login" component={Login} />
				<UnauthRoute redirectTo="/" path="/register" component={Register} />
			</Suspense>
		</Router>
	);
}
