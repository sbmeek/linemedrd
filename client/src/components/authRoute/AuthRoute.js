import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { MainContext } from 'global/context';
import Loader from 'components/loader/Loader';

export default function AuthRoute({ component: Component, ...rest }) {
	const { isAuthenticated, isLoading } = useContext(MainContext).state;

	return (
		<>
			{isLoading && <Loader />}
			<Route
				{...rest}
				render={({ location }) =>
					isAuthenticated ? (
						<Component />
					) : (
						<Redirect
							to={{
								pathname: rest.redirectTo,
								state: { from: location }
							}}
						/>
					)
				}
			/>
		</>
	);
}
