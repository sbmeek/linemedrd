export type TypeInitUserState = {
	ok: boolean;
	isEmailConfirmed: boolean;
	isAuthenticated: boolean;
	username: string;
	email: string;
	role: string;
};

export type TypeAuthProvider = {
	children: JSX.Element;
};

export type TypeAuth = {
	loading: false;
	error?: any;
	login: ({ email, pwd }: TypeParameterAuth) => any;
	logout: () => any;
};

export type TypeParameterAuth = {
	readonly email: string;
	readonly pwd: string;
};

export type TypeFunctionLogin = (
	parameterLogin: TypeParameterAuth
) => { ok: boolean; isAuthenticated: boolean } | any;
