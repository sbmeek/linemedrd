import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import {
	TypeAuthProvider,
	TypeInitUserState,
	TypeAuth,
	TypeFunctionLogin
} from './types';
import * as authService from 'services/auth-service';
import i18n from 'i18n';

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

			let res = { ...response, msg: null };
			if (response.isAuthenticated) {
				if (!response.isEmailConfirmed)
					res.msg = i18n.t('errors.loginEmailNotConfirmed');
			} else res.msg = i18n.t('errors.loginNotAuthenticated');

			return res;
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

	const recoverPwdRequest = async (email: string) => {
		try {
			let response = await authService.recoverPwdRequest(email);
			let isOk = response.ok as boolean;
			return {
				ok: isOk,
				msg: isOk ? 'None' : 'El email proporcionado no fue encontrado'
			};
		} catch (err) {
			console.log(err);
			return {
				ok: false,
				msg: 'Error en la aplicación'
			};
		}
	};

	const memoedValue = useMemo(
		() =>
			({
				user,
				loading,
				setUser,
				login,
				logout,
				recoverPwdRequest
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
