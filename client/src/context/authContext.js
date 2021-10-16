import { createContext, useContext, useEffect, useMemo, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import * as authService from '@/services/authService';

const initUserState = {
	ok: false,
	isEmailConfirmed: false,
	isAuthenticated: false,
	username: null,
	email: null,
	role: null
};

const AuthContext = createContext({
	user: initUserState,
	loading: false,
	error: {},
	login: (email, pwd) => {},
	logout: () => {}
});

export function AuthProvider({ children }) {
	const [user, setUser] = useState(initUserState);
	const [error, setError] = useState({});
	const [loading, setLoading] = useState(false);
	const [loadingInitial, setLoadingInitial] = useState(true);
	// const history = useHistory();

	useEffect(() => {
		if (error) setError(null);
	}, []);

	useEffect(() => {
		authService
			.isAuthenticated()
			.then(user => setUser(user))
			.catch(_error => {})
			.finally(() => setLoadingInitial(false));
	}, []);

	async function login(email, pwd) {
		try {
			setLoading(true);
			const response = await authService.login({ email, pwd });

			if (!response.ok) setError({ message: 'Unauthorized' });

			// setUser(response);s
			// history.push('/');
			return response;
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}

		return 'TESTING';
	}

	function logout() {
		authService.logout().then(() => setUser(undefined));
	}

	const memoedValue = useMemo(
		() => ({
			user,
			loading,
			error,
			login,
			logout
		}),
		[user, loading, error]
	);

	return (
		<AuthContext.Provider value={memoedValue}>
			{!loadingInitial && children}
		</AuthContext.Provider>
	);
}

export default function useAuth() {
	return useContext(AuthContext);
}
