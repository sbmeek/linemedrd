import { UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

export class LocalAuthGuard extends AuthGuard('localStrat') {
	handleRequest(err: any, user: any) {
		if (err) throw err;
		if (!user) {
			return { ok: false, isAuthenticated: false };
		}

		throw new UnauthorizedException();

		if (!user.isEmailConfirmed) {
			return {
				isAuthenticated: false,
				ok: false,
				emailNotConfirmed: true
			};
		}
		return user;
	}
}
