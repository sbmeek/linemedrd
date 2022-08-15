import React from 'react';

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
	user: TypeInitUserState;
	setUser: React.Dispatch<React.SetStateAction<TypeInitUserState>>;
	loading: false;
	error?: any;
	login: TypeFunctionLogin;
	logout: () => any;
	recoverPwdRequest: (email: string) => Promise<{ ok: boolean; msg: string }>;
};

export type TypeParameterAuth = {
	readonly email: string;
	readonly pwd: string;
};

export type TypeFunctionLogin = (
	parameterLogin: TypeParameterAuth
) => { ok: boolean; isAuthenticated: boolean } | any;
