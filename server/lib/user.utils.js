const nodemailer = require('nodemailer');
const JWT = require('jsonwebtoken');
const { v4: uuid } = require('uuid');
const { AES: crypt } = require('crypto-js');
const verifyEmailHTML = require('./verify-email-html')

const {
	G_MAIL_ACCOUNT,
	G_CLIENT_ID,
	G_CLIENT_SECRET,
	G_REFRESH_TOKEN,
	G_ACCESS_TOKEN,
	MED_TKN_KEY
} = process.env;

module.exports.sendEmailConfirmationCode = async (
	origin,
	user
) => {
	const key = uuid();

	JWT.sign(
		{
			ky: key,
			em: user.email
		},
		MED_TKN_KEY,
		{ expiresIn: '1d' },
		async (err, token) => {
			if (err) throw err;

			await user.updateOne({ $set: { codConfEmail: key } });

			const encToken = crypt
				.encrypt(JSON.stringify({ token }), MED_TKN_KEY)
				.toString();

			const href =
				process.env.NODE_ENV === 'production'
					? origin
					: 'http://localhost:3000';

			const mailOptions = {
				to: user.email,
				from: G_MAIL_ACCOUNT,
				subject: 'Bienvenido a LineMedRD',
				//prettier-ignore
				html: verifyEmailHTML('bobo', 'martinez', href, origin, encToken)
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
		}
	);
};
