import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
	user: null,
	isAuthenticated: false,
	isLoading: false
};

export const actionTypes = {
	SET_IS_LOADING: 'SET_IS_LOADING',
	SET_IS_AUTHENTICATED: 'SET_IS_AUTHENTICATED'
};

export const MainContext = createContext({ state: initialState });

const reducer = (state, action) => {
	switch (action.type) {
		case actionTypes.SET_IS_LOADING:
			return {
				...state,
				[state.isLoading]: action.payload.isLoading
			};
		case actionTypes.SET_IS_AUTHENTICATED:
			return {
				...state,
				[state.isAuthenticated]: action.payload.isAuthenticated
			};
		default:
			return state;
	}
};

export default function ContextWrapper({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		axios.post('/user/check-auth').then(({ data }) => {
			dispatch({
				type: actionTypes.SET_IS_AUTHENTICATED,
				payload: {
					isAuthenticated: data.isAuthenticated
				}
			});
		});
		dispatch({
			type: actionTypes.SET_IS_LOADING,
			payload: {
				isLoading: false
			}
		});
	}, []);

	return (
		<MainContext.Provider value={{ state, dispatch }}>
			{children}
		</MainContext.Provider>
	);
}
