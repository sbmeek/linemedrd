import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import {
	TypeAuthProvider,
	TypeInitUserState,
	TypeAuth,
	TypeFunctionLogin
} from './auth.type';
import * as authService from 'services/auth-service';

const initUserState: TypeInitUserState = {
	ok: false,
	isEmailConfirmed: false,
	isAuthenticated: false,
	username: '',
	email: '',
	role: ''
};

const AuthContext = createContext({
	user: initUserState,
	loading: false
} as TypeAuth);

export const AuthProvider = <T extends TypeAuthProvider>({ children }: T) => {
	const [user, setUser] = useState<typeof initUserState>(initUserState);
	const [loading, setLoading] = useState<boolean>(false);
	const [initialLoading, setInitialLoading] = useState<boolean>(true);

	useEffect(() => {
		authService
			.isAuthenticated()
			.then(user => setUser(user))
			.finally(() => setInitialLoading(false));
	}, []);

	const login: TypeFunctionLogin = async paramsAuthentic => {
		try {
			setLoading(true);
			const response = (await authService.login(
				paramsAuthentic
			)) as TypeInitUserState;

			return !response.isAuthenticated
				? { ...response, msg: 'Verificar que las credenciales son correctas.' }
				: response;
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const logout: () => void = function logout() {
		authService.logout().then(() => {
			setUser(initUserState);
		});
	};

	const memoedValue = useMemo(
		() =>
			({
				user,
				loading,
				setUser,
				login,
				logout
			} as TypeAuth),
		[user, loading]
	);

	return (
		<AuthContext.Provider value={memoedValue}>
			{!initialLoading && children}
		</AuthContext.Provider>
	);
};

export default function useAuth(): TypeAuth {
	return useContext(AuthContext);
}
