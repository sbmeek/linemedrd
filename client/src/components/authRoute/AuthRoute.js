import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { MainContext } from 'global/context';
import Loader from 'components/loader/Loader';

export default function AuthRoute({
	component: Component,
	minRoleAllowedTo,
	...rest
}) {
	const { isAuthenticated, isLoading, user } = useContext(MainContext).state;

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<Route
					{...rest}
					render={({ location }) =>
						isAuthenticated &&
						user !== null &&
						user.Role >= minRoleAllowedTo ? (
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
			)}
		</>
	);
}
