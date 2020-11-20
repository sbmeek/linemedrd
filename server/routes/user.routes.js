const { Router } = require('express');
const passport = require('passport');
require('../auth/local');
const JWT = require('jsonwebtoken');
const User = require('../models/User');
const router = Router();
const http = require('http');
const { SESSION_SECRET } = process.env;

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
		const { body } = req;
		const user = new User(body);
		user.password = await user.hashPwd(body.password);
		const savedUser = await user.save();
		res.json({ ok: true, savedUser });
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
