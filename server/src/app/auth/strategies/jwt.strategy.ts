import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { User } from 'app/entities/user/user.model';
import { UserService } from 'app/entities/user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(private readonly userService: UserService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: process.env.SESSION_SECRET
		});
	}

	async validate(validationPayload: {
		email: string;
		sub: string;
	}): Promise<User> | null {
		return this.userService.getByEmail(validationPayload.email);
	}
}
