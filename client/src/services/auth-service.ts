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

export const fetchJsonWithBody = async (url: string, body: {}) => {
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	};
	const response = await fetch(url, options);
	const json = await response.json();
	return json;
};

export async function login<T extends { email: string; pwd: string }>({
	email,
	pwd
}: T) {
	return fetchJsonWithBody(`${apiUrl}/auth/login`, { email, pwd });
}

export const isAuthenticated = () => fetchJson(`${apiUrl}/auth/check-auth`);

export const logout = () => fetchJson(`${apiUrl}/auth/logout`);

export const recoverPwdRequest = (email: string) =>
	fetchJsonWithBody(`${apiUrl}/auth/recover-pwd/request`, { email });

export const recoverPwdSetNew = (encToken: string, newPwd: string) =>
	fetchJsonWithBody(`${apiUrl}/auth/recover-pwd/set-new-pwd`, {
		encToken,
		newPwd
	});
