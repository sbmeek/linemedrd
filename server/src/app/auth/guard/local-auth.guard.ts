import { AuthGuard } from '@nestjs/passport';

export class LocalAuthGuard extends AuthGuard('localStrat') {
	handleRequest(err: any, user: any) {
		if (err) throw err;
		if (!user) {
			return { ok: false, isAuthenticated: false };
		}

		if (!user.isEmailConfirmed) {
			return {
				ok: false,
				isAuthenticated: true,
				isEmailConfirmed: false
			};
		}
		return user;
	}
}
