import { apiUrl } from '@/client';

/**
 * @type {RequestInit}
 */
const baseOptions = {
	method: 'POST',
	credentials: 'include'
};

export const fetchJson = async url => {
	const response = await fetch(url, baseOptions);
	const json = await response.json();
	return json;
};

export const login = async ({ email, pwd }) => {
	const params = new URLSearchParams({ email, pwd });
	return await fetchJson(`${apiUrl}/auth/login?${params}`);
};

export const isAuthenticated = async () =>
	await fetchJson(`${apiUrl}/auth/check-auth`);

export const logout = async () => await fetchJson(`${apiUrl}/auth/logout`);
