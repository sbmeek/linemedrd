import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { JwtService } from '@nestjs/jwt';
import { v4 as uuid } from 'uuid';
import { AES as crypt } from 'crypto-js';

import { UserDocument } from 'app/entities/user/user.model';
import { recoverPwdHtml, verifyEmailHtml } from './templates';

@Injectable()
export class MailService {
	constructor(
		private readonly mailerService: MailerService,
		private readonly jwtService: JwtService
	) {}

	private generateToken(
		email: string,
		origin: string,
		callback: ({ encToken, key, href }) => void
	) {
		const key = uuid();
		const payload = {
			ky: key,
			em: email
		};

		this.jwtService
			.signAsync(payload, {
				secret: process.env.MED_TKN_KEY,
				expiresIn: '1d'
			})
			.then((token: string) => {
				const encToken = crypt
					.encrypt(JSON.stringify({ token }), process.env.MED_TKN_KEY)
					.toString();
				const href =
					process.env.NODE_ENV === 'production'
						? origin
						: 'http://localhost:3000';
				return callback({ encToken, key, href });
			})
			.catch(err => console.log(err));
	}

	async sendEmailConfirmationCode(origin: string, user: UserDocument) {
		this.generateToken(user.email, origin, async ({ encToken, key, href }) => {
			await user.updateOne({ $set: { codConfEmail: key } });
			this.mailerService
				.sendMail({
					to: user.email,
					subject: 'Bienvenido a LineMedRD',
					html: verifyEmailHtml(user.name, user.lastname, href, encToken)
				})
				.then(s => console.log(s))
				.catch(err => console.log(err));
		});
	}

	async sendEmailRecoverPwd(origin: string, user: UserDocument) {
		this.generateToken(user.email, origin, async ({ encToken, key, href }) => {
			await user.updateOne({ $set: { codRecPwd: key } });
			this.mailerService
				.sendMail({
					to: user.email,
					subject: 'Contraseña de LineMedRD',
					html: recoverPwdHtml(user.name, href, encToken)
				})
				.then(s => console.log(s))
				.catch(err => console.log(err));
		});
	}
}
