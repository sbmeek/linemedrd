import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { enc, AES as crypt } from 'crypto-js';

import { User } from 'app/entities/user/user.model';
import { UserService } from 'app/entities/user/user.service';
import { MailService } from 'app/mail/mail.service';

@Injectable()
export class AuthService {
	constructor(
		private readonly userService: UserService,
		private readonly jwtService: JwtService,
		private readonly mailService: MailService
	) {}

	private signToken(iis: string, userId: string) {
		return this.jwtService.sign(
			{
				iis,
				sub: userId
			},
			{
				secret: process.env.SESSION_SECRET,
				expiresIn: 12 * 60000
			}
		);
	}

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

	async verifyEmailConfCode(encToken: string) {
		try {
			const tokenObj = this.decryptToken(encToken);
			const user = await this.userService.getByEmail(tokenObj.em);
			if (user === null || user === undefined) return { ok: false };

			if (user.codConfEmail === tokenObj.ky) {
				if (!user.isEmailConfirmed) {
					await user.updateOne({ $set: { isEmailConfirmed: true } });
					return { ok: true };
				} else return { ok: false };
			} else return { ok: false };
		} catch (err) {
			console.log(err);
			return {
				ok: false,
				err: process.env.NODE_ENV === 'development' ? err.stack : 'Bobo'
			};
		}
	}

	async recoverPwdRequest(email: string, origin: string) {
		try {
			const user = await this.userService.getByEmail(email);
			if (user === null || user === undefined)
				return {
					ok: false,
					userNonExistent: true
				};
			else {
				this.mailService.sendEmailRecoverPwd(origin, user);
				return { ok: true };
			}
		} catch (err) {
			console.log(err);
			return {
				ok: false,
				err: process.env.NODE_ENV === 'development' ? err.stack : 'Bobo'
			};
		}
	}

	async recoverPwdSetNew(encToken: string, newPwd: string) {
		try {
			const tokenObj = this.decryptToken(encToken);
			const user = await this.userService.getByEmail(tokenObj.em);

			if (user === null || user === undefined) return { ok: false };
			else {
				const isTokenOk = user.codRecPwd === tokenObj.ky;

				if (newPwd === null || newPwd === undefined) return { ok: isTokenOk };
				if (newPwd && isTokenOk) {
					const pwd = await user.hashPwd(newPwd);
					await user.updateOne({ $set: { password: pwd, codRecPwd: '-' } });
					return {
						ok: true,
						pwdUpdated: true
					};
				} else return { ok: false, pwdUpdated: false };
			}
		} catch (err) {
			console.log(err);
			return {
				ok: false,
				err: process.env.NODE_ENV === 'development' ? err.stack : 'Bobo'
			};
		}
	}
}
