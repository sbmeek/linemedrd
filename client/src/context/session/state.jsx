import { useMemo, useReducer } from 'react';
import * as authService from '@/services/authService';
import { SessionContext } from './sessionContext';
import { sessionReducer } from './sessionReducer';

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
				dispatch({
					type: 'LOGIN_FAILED',
					payload: {
						message: 'Unathorized'
					}
				});
				return;
			}

			// @ts-ignore
			dispatch({
				type: 'LOGIN_SUCCESS',
				payload: response
			});
		} catch (error) {
			// console.log(error);
		}
	};

	const memoizedContextValue = useMemo({
		user: state.user,
		error: state.error,
		loading: state.loading,
		login
	});

	return (
		<SessionContext.Provider value={memoizedContextValue}>
			{children}
		</SessionContext.Provider>
	);
};

export default SessionState;
