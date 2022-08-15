import { apiUrl } from '../client';

const baseOptions: RequestInit = {
	method: 'POST',
	credentials: 'include'
};

export const fetchJson = async (url: string) => {
	const response = await fetch(url, baseOptions);
	const json = await response.json();
	return json;
};

export async function login<T extends { email: string; pwd: string }>({
	email,
	pwd
}: T) {
	const url = `${apiUrl}/auth/login`;
	const data = new FormData();
	data.append('email', email);
	data.append('pwd', pwd);
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ email, pwd })
	});
	const json = await response.json();
	return json;
}

export const isAuthenticated = () => fetchJson(`${apiUrl}/auth/check-auth`);

export const logout = () => fetchJson(`${apiUrl}/auth/logout`);

export const recoverPwdRequest = (email: string) =>
	fetchJson(`${apiUrl}/auth/recover-pwd/request`);
