import { AuthGuard } from '@nestjs/passport';

export class JwtAuthGuard extends AuthGuard('jwt') {
	handleRequest(err: any, user: any) {
		if (err) throw err;
		if (!user) {
			return { ok: false, isAuthenticated: false, user: null };
		}
		return user;
	}
}
