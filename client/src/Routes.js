import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loader from './components/loader/Loader';
import styled from 'styled-components';
import Appbar from './components/appbar/Appbar';

const AuthRoute = lazy(() => import('components/authRoute/AuthRoute'));
const UnauthRoute = lazy(() => import('components/unauthRoute/UnauthRoute'));
const Main = lazy(() => import('pages/main/Main'));
const Login = lazy(() => import('pages/login/Login'));
const Register = lazy(() => import('pages/register/Register'));
const RegAppoint = lazy(() => import('pages/regAppoint/RegAppoint'));
const RecPwd = lazy(() => import('pages/recPwd/RecPwd'));
const SetNewPwd = lazy(() => import('pages/setNewPwd/SetNewPwd'));
const ConfirmEmail = lazy(() => import('pages/confirmEmail/ConfirmEmail'));
const ReservApnts = lazy(() => import('pages/reserved-appoints/ReservApnts'));

const AppContainer = styled.div`
	display: grid;
	grid-template-rows: 10% 90%;
	width: 100%;
	box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.08);
	height: 100%;

	@media (min-width: 415px) {
		height: 90%;
		max-width: 350px;
	}
`;

const Content = styled.div`
	display: flex;
	height: 100%;
	padding-top: 28px;
`;

export default function Routes() {

	useEffect(() => {
		setTimeout(() => {
			document.querySelector('#loader')?.remove();
			document.querySelector('#loader-style')?.remove();
		}, 1600);
	}, []);

	return (
		<Router>
			<Suspense fallback={<Loader />}>
				<AppContainer>
					<Appbar />
					<Content>
						<AuthRoute exact redirectTo="/login" path="/" component={Main} />
						<AuthRoute path="/regAppoint" component={RegAppoint} />
						<UnauthRoute redirectTo="/" path="/login" component={Login} />
						<UnauthRoute redirectTo="/" path="/register" component={Register} />
						<Route path="/verify-email/:token" component={ConfirmEmail} />
						<UnauthRoute redirectTo="/" path="/recoverpwd" component={RecPwd} />
						<Route path="/setnewpwd/:token" component={SetNewPwd} />
						<AuthRoute path="/reservedApnts" component={ReservApnts} />
					</Content>
				</AppContainer>
			</Suspense>
		</Router>
	);
}
