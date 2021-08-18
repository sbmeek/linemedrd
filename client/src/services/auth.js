import { apiUrl } from '@/client';

/**
 * @type {RequestInit}
 */
const baseOptions = {
	method: 'POST',
	credentials: 'include'
};

export default class AuthService {
	static async login({ email, pwd }) {
		const params = new URLSearchParams({ email, pwd });
		const response = await fetch(`${apiUrl}/auth/login?${params}`, baseOptions);
		const json = await response.json();
		return json;
	}

	static async isAuthenticated() {
		const response = await fetch(`${apiUrl}/auth/check-auth`, baseOptions);
		const json = await response.json();
		return json.isAuthenticated;
	}
}
