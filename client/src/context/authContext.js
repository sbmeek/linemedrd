import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
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
	error: undefined,
	login: (email, pwd) => {},
	logout: () => {}
});

export function AuthProvider({ children }) {
	const [user, setUser] = useState(initUserState);
	const [error, setError] = useState();
	const [loading, setLoading] = useState(false);
	const [loadingInitial, setLoadingInitial] = useState(true);
	const history = useHistory();

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

	function login(email, pwd) {
		setLoading(true);

		authService
			.login({ email, pwd })
			.then(response => {
				console.log(response);
				if (!response.ok) return;
				setUser(response);
				history.push('/');
			})
			.catch(error => setError(error))
			.finally(() => setLoading(false));
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
