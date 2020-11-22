const { Router } = require('express');
const passport = require('passport');
require('../auth/local');
const JWT = require('jsonwebtoken');
const User = require('../models/User');
const router = Router();
const { SESSION_SECRET, MED_TKN_KEY } = process.env;
const { sendEmailConfirmationCode } = require('../lib/user.utils');
const { AES: crypt, enc } = require('crypto-js');

const signToken = (iis, userId) => {
	return JWT.sign(
		{
			iis,
			sub: userId
		},
		SESSION_SECRET,
		{ expiresIn: 30 * 60 }
	);
};

router.post('/register', async (req, res) => {
	try {
		const { values } = req.body;
		const user = new User({ ...values });
		user.password = await user.hashPwd(values.password);
		await user.save();
		sendEmailConfirmationCode(req.headers.origin, user);
		res.json({ ok: true });
	} catch (error) {
		console.error(error);
		res.json({
			ok: false,
			err: process.env.NODE_ENV === 'development' ? error.stack : 'Bobo'
		});
	}
});

router.post('/verify-email-conf-code', async (req, res) => {
	try {
		const { encToken } = req.body;
		const bytes = crypt.decrypt(encToken, MED_TKN_KEY);
		const decToken = JSON.parse(bytes.toString(enc.Utf8));
		const tokenObj = JWT.verify(decToken.token, MED_TKN_KEY);
		const user = await User.findOne({ email: tokenObj.em });
		console.log(user);
		if (user === null || user === undefined) {
			res.json({ ok: false });
			return;
		}

		if (user.codConfEmail === tokenObj.ky) {
			if (!user.isEmailConfirmed) {
				await user.updateOne({ $set: { isEmailConfirmed: true } });
				res.json({ ok: true });
			} else {
				res.json({ ok: false });
			}
		} else {
			res.json({ ok: false });
		}
	} catch (error) {
		console.error(error);
		res.json({
			ok: false,
			err: process.env.NODE_ENV === 'development' ? error.stack : 'Bobo'
		});
	}
});

router.post('/login', async (req, res, next) => {
	passport.authenticate('local', { session: false }, (err, user) => {
		console.log(err, user);
		if (err !== null && err.emailNotConfirmed) {
			res.json({
				isAuthenticated: false,
				ok: false,
				emailNotConfirmed: true
			});
		} else if (!user) {
			res.json({ ok: false });
		} else {
			const { _id, email } = user;
			req.medTkn.medTkn = signToken('medTkn', _id);
			res.json({
				isAuthenticated: true,
				ok: true,
				user: {
					_id,
					email
				}
			});
		}
	})(req, res, next);
});

router.post('/check-auth', async (req, res, next) => {
	passport.authenticate('jwt', { session: false }, (_, user) => {
		if (!user) res.json({ isAuthenticated: false, user: null });
		else {
			const { _id, email } = user;
			res.json({
				isAuthenticated: true,
				user: {
					_id,
					email
				}
			});
		}
	})(req, res, next);
});

module.exports = router;
