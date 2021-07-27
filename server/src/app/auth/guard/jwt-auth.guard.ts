import { AuthGuard } from '@nestjs/passport';

export class JwtAuthGuard extends AuthGuard('jwt') {
	handleRequest(err: any, user: any) {
		if (err !== null) {
			return {
				ok: false,
				isAuthenticated: false
			};
		} else if (!user) {
			return { ok: false, isAuthenticated: false, user: null };
		} else return user;
	}
}
