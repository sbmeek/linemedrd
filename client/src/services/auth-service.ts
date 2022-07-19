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

export function login<T extends { email: string; pwd: string }>({
	email,
	pwd
}: T) {
	const params = new URLSearchParams({ email, pwd });
	return fetchJson(`${apiUrl}/auth/login?${params}`);
}

export const isAuthenticated = () => fetchJson(`${apiUrl}/auth/check-auth`);

export const logout = () => fetchJson(`${apiUrl}/auth/logout`);
