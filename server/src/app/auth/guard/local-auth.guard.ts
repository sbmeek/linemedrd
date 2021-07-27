import { AuthGuard } from '@nestjs/passport';

export class LocalAuthGuard extends AuthGuard('local') {
	handleRequest(err: any, user: any) {
		if (err !== null && err.emailNotConfirmed) {
			return {
				isAuthenticated: false,
				ok: false,
				emailNotConfirmed: true
			};
		} else if (!user) return { ok: false };
		else return user;
	}
}
