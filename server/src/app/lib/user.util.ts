import JWT from 'JsonWebtoken';
import nodemailer from 'nodemailer';
import { v4 as uuid } from 'uuid';
import { AES as crypt } from 'crypto-js';

import { UserDocument } from 'app/entities/user/user.model';
import { verify_email_html } from './verify-email-html';
import { recover_pwd_html } from './recover-pwd-html';

const {
	G_MAIL_ACCOUNT,
	G_CLIENT_ID,
	G_CLIENT_SECRET,
	G_REFRESH_TOKEN,
	G_ACCESS_TOKEN,
	MED_TKN_KEY
} = process.env;

const sendEmail = async (to: string, subject = 'LineMedRD', html: string) => {
	const mailOptions = {
		to,
		from: G_MAIL_ACCOUNT,
		subject,
		html
	};

	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			type: 'OAuth2',
			user: G_MAIL_ACCOUNT,
			clientId: G_CLIENT_ID,
			clientSecret: G_CLIENT_SECRET,
			refreshToken: G_REFRESH_TOKEN,
			accessToken: G_ACCESS_TOKEN
		}
	});
	const res = await transporter.sendMail(mailOptions);
	return res;
};

const generateToken = (email: string, origin: string, callback: any) => {
	const key = uuid();
	JWT.sign(
		{
			ky: key,
			em: email
		},
		MED_TKN_KEY,
		{ expiresIn: '1d' },
		async (err, token) => {
			if (err) throw err;
			const encToken = crypt
				.encrypt(JSON.stringify({ token }), MED_TKN_KEY)
				.toString();
			const href =
				process.env.NODE_ENV === 'production'
					? origin
					: 'http://localhost:3000';
			callback({ encToken, key, href });
		}
	);
};

export const sendEmailConfirmationCode = async (
	origin: string,
	user: UserDocument
) => {
	generateToken(user.email, origin, async ({ encToken, key, href }) => {
		await user.updateOne({ $set: { codConfEmail: key } });
		const res = await sendEmail(
			user.email,
			'Bienvenido a LineMedRD',
			verify_email_html(user.name, user.lastname, href, encToken)
		);
		return res;
	});
};

export const sendEmailRecoverPwd = (origin: string, user: UserDocument) => {
	generateToken(user.email, origin, async ({ encToken, key, href }) => {
		await user.updateOne({ $set: { codRecPwd: key } });
		const res = await sendEmail(
			user.email,
			'Contraseña de LineMedRD',
			recover_pwd_html(user.name, href, encToken)
		);
		return res;
	});
};
