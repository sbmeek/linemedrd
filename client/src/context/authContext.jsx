import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as authService from 'services/authService';

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

	async function login(email, pwd) {
		setLoading(true);
		let notify = false;
		notify = await authService
			.login({ email, pwd })
			.then(response => {
				setError(response);
				if (!response.ok) return setError(response);
				setUser(response);
				history.push('/');
			})
			.catch(error => error)
			.finally(() => setLoading(false));
		return notify;
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
