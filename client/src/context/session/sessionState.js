import { useReducer } from 'react';
import { SessionContext } from './sessionContext';
import { sessionReducer } from './sessionReducer';
import * as authService from '@/services/authService';

export const initialState = {
	user: {},
	error: null,
	loading: false,
	loadingInitial: true
};

const SessionState = ({ children }) => {
	const [state, dispatch] = useReducer(sessionReducer, initialState);

	const login = async (email, pwd) => {
		try {
			const response = await authService.login({ email, pwd });
			// @ts-ignore
			dispatch({
				type: 'LOGIN'
			});

			if (!response.ok) {
				// @ts-ignore
				return dispatch({
					type: 'LOGIN_FAILED',
					payload: {
						message: 'Unathorized'
					}
				});
			}

			// @ts-ignore
			dispatch({
				type: 'LOGIN_SUCCESS',
				payload: response
			});
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<SessionContext.Provider
			value={{
				user: state.user,
				error: state.error,
				loading: state.loading,
				login
			}}
		>
			{children}
		</SessionContext.Provider>
	);
};

export default SessionState;
