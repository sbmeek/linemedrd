import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { User } from 'app/entities/user/user.model';
import { UserService } from 'app/entities/user/user.service';

@Injectable()
export class AuthService {
	constructor(
		private readonly userService: UserService,
		private readonly jwtService: JwtService
	) {}

	async validate(email: string, pwd: string): Promise<User> | null {
		const user = await this.userService.getByEmail(email);
		if (!user) return null;

		const pwdIsValid = await user.comparePwd(user.password, pwd);
		return pwdIsValid ? user : null;
	}

	login(user: User): { accessToken: string } {
		const payload = {
			email: user.email,
			sub: user._id
		};

		return {
			accessToken: this.jwtService.sign(payload)
		};
	}

	async verify(token: string): Promise<User> {
		const decoded = this.jwtService.verify(token, {
			secret: process.env.SESSION_SECRET
		});

		const user = this.userService.getByEmail(decoded.email);
		if (!user) throw new Error('Unable to get User from decoded token');
		return user;
	}
}
