const nodemailer = require('nodemailer');
const JWT = require('jsonwebtoken');
const { v4: uuid } = require('uuid');
const { AES: crypt } = require('crypto-js');
const verifyEmailHTML = require('./verify-email-html');
const recoverPwdHTML = require('./recover-pwd-html');

const {
	G_MAIL_ACCOUNT,
	G_CLIENT_ID,
	G_CLIENT_SECRET,
	G_REFRESH_TOKEN,
	G_ACCESS_TOKEN,
	MED_TKN_KEY
} = process.env;

const sendEmail = async (to, subject = 'LineMedRD', html) => {
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

const generateToken = (email, origin, callback) => {
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
}

module.exports.sendEmailConfirmationCode = async (origin, user) => {
	generateToken(user.email, origin, async ({ encToken, key, href }) => {

		await user.updateOne({ $set: { codConfEmail: key } });

		const res = await sendEmail(
			user.email,
			'Bienvenido a LineMedRD',
			verifyEmailHTML(user.name, user.lastname, href, encToken)
		);

		return res;
	});
};

module.exports.sendEmailRecoverPwd = (origin, user) => {
	generateToken(user.email, origin, async ({ encToken, key, href }) => {

		await user.updateOne({ $set: { codRecPwd: key } });

		const res = await sendEmail(
			user.email,
			'Contraseña de LineMedRD',
			recoverPwdHTML(user.name, href, encToken)
		);

		return res;
	});
};
