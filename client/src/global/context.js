import React, { createContext, useReducer } from 'react';

const initialState = {
	user: null,
	isAuthenticated: false,
	isLoading: false
};

export const InitContext = createContext({ state: initialState });

const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_IS_LOADING':
			return {
				...state,
				[state.isLoading]: action.payload.isLoading
			}
		default:
			return state;
	}
};

export default function Context ({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<InitContext.Provider value={{ state, dispatch }}>
			{children}
		</InitContext.Provider>
	);
};
