import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { enc, AES as crypt } from 'crypto-js';
import { Request } from 'express';

import { User } from 'app/entities/user/user.model';
import { UserService } from 'app/entities/user/user.service';
import { MailService } from 'app/mail/mail.service';
import { sessionCookieName } from 'app/config/options';

@Injectable()
export class AuthService {
	constructor(
		private readonly userService: UserService,
		private readonly jwtService: JwtService,
		private readonly mailService: MailService
	) {}

	private decryptToken(encryptedToken: string) {
		const bytes = crypt.decrypt(
			encryptedToken,
			process.env.MED_TKN_KEY as string
		);
		const decToken = JSON.parse(bytes.toString(enc.Utf8));
		const tokenObj = this.jwtService.verify(decToken.token, {
			secret: process.env.MED_TKN_KEY as string
		});
		return tokenObj;
	}

	async validate(email: string, pwd: string): Promise<User> | null {
		const user = await this.userService.getByEmail(email);
		if (!user) return null;

		const pwdIsValid = await user.comparePwd(user.password, pwd);
		return pwdIsValid ? user : null;
	}

	async verify(token: string): Promise<User> {
		const decoded = this.jwtService.verify(token, {
			secret: process.env.SESSION_SECRET
		});

		const user = this.userService.getByEmail(decoded.email);
		if (!user) throw new Error('Unable to get User from decoded token');
		return user;
	}

	login(req: Request) {
		const user = req.user as any;
		const payload = {
			email: user.email,
			sub: user._id
		};
		if (!user.ok) return user;
		req.session[sessionCookieName] = {
			accessToken: this.jwtService.sign(payload, {
				secret: process.env.SESSION_SECRET,
				expiresIn: 12 * 60000
			})
		};
		return user;
	}

	logout(req: Request) {
		req.session.destroy(() => 1);
		return { user: null, isAuthenticated: false, ok: true };
	}

	async verifyEmailConfCode(encToken: string) {
		const tokenObj = this.decryptToken(encToken);
		const user = await this.userService.getByEmail(tokenObj.em);
		if (user === null || user === undefined) return { ok: false };
		if (user.codConfEmail === tokenObj.ky && !user.isEmailConfirmed) {
			await user.updateOne({ $set: { isEmailConfirmed: true } });
			return { ok: true };
		}
		return { ok: false };
	}

	async recoverPwdRequest(email: string, origin: string) {
		const user = await this.userService.getByEmail(email);
		if (!user)
			return {
				ok: false,
				userNonExistent: true
			};

		this.mailService.sendEmailRecoverPwd(origin, user);
		return { ok: true };
	}

	async recoverPwdSetNew(encToken: string, newPwd: string) {
		const tokenObj = this.decryptToken(encToken);
		const user = await this.userService.getByEmail(tokenObj.em);
		if (!user) return { ok: false };

		const isTokenOk = user.codRecPwd === tokenObj.ky;
		if (!newPwd) return { ok: isTokenOk };
		if (newPwd && isTokenOk) {
			const pwd = await user.hashPwd(newPwd);
			await user.updateOne({ $set: { password: pwd, codRecPwd: '-' } });
			return {
				ok: true,
				pwdUpdated: true
			};
		}
		return { ok: false, pwdUpdated: false };
	}
}
