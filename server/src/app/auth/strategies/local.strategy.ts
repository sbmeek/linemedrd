import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

import { User } from 'app/entities/user/user.model';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
	constructor(private readonly authService: AuthService) {
		super({ usernameField: 'email', passwordField: 'pwd' });
	}

	async validate(email: string, pwd: string): Promise<User> {
		const user = await this.authService.validate(email, pwd);
		if (!user) throw new UnauthorizedException();

		return user;
	}
}
