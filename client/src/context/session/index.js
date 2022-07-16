import { createContext } from 'react';

const initUserState = {
	ok: false,
	isEmailConfirmed: false,
	isAuthenticated: false,
	username: null,
	email: null,
	role: null
};

export const SessionContext = createContext({
	user: initUserState,
	loading: false,
	error: {},
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	login: (email, pwd) => {}
});
