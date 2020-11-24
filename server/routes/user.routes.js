const { Router } = require('express');
const passport = require('passport');
require('../auth/local');
const JWT = require('jsonwebtoken');
const User = require('../models/User');
const router = Router();
const { SESSION_SECRET, MED_TKN_KEY } = process.env;
const {
	sendEmailConfirmationCode,
	sendEmailRecoverPwd
} = require('../lib/user.utils');
const { AES: crypt, enc } = require('crypto-js');

const signToken = (iis, userId) => {
	return JWT.sign(
		{
			iis,
			sub: userId
		},
		SESSION_SECRET,
		{ expiresIn: 120 * 60000 }
	);
};

const decryptToken = (encryptedToken) => {
	const bytes = crypt.decrypt(encryptedToken, MED_TKN_KEY);
	const decToken = JSON.parse(bytes.toString(enc.Utf8));
	const tokenObj = JWT.verify(decToken.token, MED_TKN_KEY);
	return tokenObj;
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
		const tokenObj = decryptToken(encToken);
		const user = await User.findOne({ email: tokenObj.em });

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

router.post('/recover-pwd/request', async (req, res) => {
	try {
		const { body } = req;
		const user = await User.findOne({ email: body.email });
		if (user === null || user === undefined) {
			res.json({ ok: false, userNonExistent: true });
		} else {
			sendEmailRecoverPwd(req.headers.origin, user);
			res.json({ ok: true });
		}
	} catch (error) {
		console.error(error);
		res.json({
			ok: false,
			err: process.env.NODE_ENV === 'development' ? error.stack : 'Bobo'
		});
	}
});

router.post('/recover-pwd/set-new-pwd', async (req, res) => {
	try {
		const { encToken, newPwd } = req.body;
		const tokenObj = decryptToken(encToken);
		const user = await User.findOne({ email: tokenObj.em });

		if (user === null || user === undefined) {
			res.json({ ok: false });
			return;
		} else {
			const isTokenOk = user.codRecPwd === tokenObj.ky;

			if (newPwd === null || newPwd === undefined) {
				res.json({ ok: isTokenOk });
			}

			if (newPwd && isTokenOk) {
				const pwd = await user.hashPwd(newPwd);
				await user.updateOne({ $set: { password: pwd, codRecPwd: '-' } });

				res.json({ ok: true, pwdUpdated: true });
			}
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
		if (err !== null && err.emailNotConfirmed) {
			res.json({
				isAuthenticated: false,
				ok: false,
				emailNotConfirmed: true
			});
		} else if (!user) {
			res.json({ ok: false });
		} else {
			const { _id, email, Role } = user;
			req.medTkn.medTkn = signToken('medTkn', _id);
			res.json({
				isAuthenticated: true,
				ok: true,
				user: {
					_id,
					email,
					Role
				}
			});
		}
	})(req, res, next);
});

router.post('/logout', (req, res, next) => {
	passport.authenticate('jwt', { session: false }, (_err, user) => {
		if (!user) res.json({ isAuthenticated: false, ok: false })
		else {
			req.medTkn.reset()
			res.json({ user: null, isAuthenticated: false, ok: true })
		}
	})(req, res, next)
})

router.post('/check-auth', async (req, res, next) => {
	passport.authenticate('jwt', { session: false }, (_, user) => {
		if (!user) res.json({ isAuthenticated: false, user: null });
		else {
			const { _id, email, Role } = user;
			res.json({
				isAuthenticated: true,
				user: {
					_id,
					email,
					Role
				}
			});
		}
	})(req, res, next);
});

module.exports = router;
