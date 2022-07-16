import { initialState } from './sessionState';

export const sessionReducer = (state = initialState, action = null) => {
	switch (action.type) {
	case 'LOGIN':
		return { ...state, loading: true };
	case 'LOGIN_FAILED':
		return { ...state, loading: false, error: action.payload };
	case 'LOGIN_SUCCESS':
		return {
			...state, loading: false, user: action.payload, error: null
		};
	default:
		return state;
	}
};
