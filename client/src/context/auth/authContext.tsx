// TODO Dalvin (W/Angel): migrar a typescript
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import {
	TypeAuthProvider,
	TypeInitUserState,
	TypeParameterAuth,
	TypeAuth,
	TypeFunctionLogin
} from './auth.type';
import * as authService from 'services/authService';

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
	loading: false,
	error: {},
	login: () => {},
	logout: () => {}
} as TypeAuth);

export const AuthProvider = <T extends TypeAuthProvider>({ children }: T) => {
	const [user, setUser] = useState<typeof initUserState>(initUserState);

	const [loading, setLoading] = useState<boolean>(false);

	const [loadingInitial, setLoadingInitial] = useState<boolean>(true);

	useEffect(() => {
		authService
			.isAuthenticated()
			.then(user => setUser(user))
			.catch(_error => {})
			.finally(() => setLoadingInitial(false));
	}, []);

	const login: TypeFunctionLogin = async function login(paramsAuthentic) {
		try {
			setLoading(true);
			const response = (await authService.login(
				paramsAuthentic
			)) as TypeInitUserState;
			if (!response.isAuthenticated) return response;
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const logout: () => void = function logout() {
		authService.logout().then(() => setUser({} as TypeInitUserState));
	};

	const memoedValue = useMemo(
		() =>
			({
				user,
				loading,
				login,
				logout
			} as TypeAuth),
		[user, loading]
	);

	return (
		<AuthContext.Provider value={memoedValue}>
			{!loadingInitial && children}
		</AuthContext.Provider>
	);
};

export default function useAuth(): TypeAuth {
	return useContext(AuthContext);
}
