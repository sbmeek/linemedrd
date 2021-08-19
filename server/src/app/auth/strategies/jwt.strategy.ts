import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { UserService } from 'app/entities/user/user.service';
import { sessionCookieName } from 'app/config/options';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwtStrat') {
	constructor(private readonly userService: UserService) {
		super({
			jwtFromRequest: ExtractJwt.fromExtractors([
				req => req.session[sessionCookieName]?.accessToken
			]),
			ignoreExpiration: false,
			secretOrKey: process.env.SESSION_SECRET
		});
	}

	async validate(validationPayload: { email: string; sub: string }) {
		const user = await this.userService.getByEmail(validationPayload.email);
		return {
			ok: true,
			isEmailConfirmed: user.isEmailConfirmed,
			isAuthenticated: true,
			...user.clientSideData()
		};
	}
}
