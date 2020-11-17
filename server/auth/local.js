const passport = require('passport');
const User = require('../models/User');
const { Strategy: LocalStrat } = require('passport-local');
const { Strategy: JWTStrat } = require('passport-jwt');

const { SESSION_SECRET } = process.env;

passport.use(
	new JWTStrat(
		{
			jwtFromRequest: (req) => (req.medTkn ? req.medTkn.medTkn : null),
			secretOrKey: SESSION_SECRET
		},
		(payload, done) => {
			User.findById({ _id: payload.sub }, (err, user) => {
				if (err) return done(err, false);
				if (user) return done(null, user);
				else return done(null, false);
			});
		}
	)
);

passport.use(
	new LocalStrat(
		{
			usernameField: 'email',
			passwordField: 'password'
		},
		async (email, password, done) => {
			try {
				const user = await User.findOne({ email });
				console.log(user);
				if (user === null) {
					return done(null, false);
				}
				if (!user.isEmailConfirmed) {
					return done({ emailNotConfirmed: true, ok: false }, false);
				} else {
					let isPasswordOk = await user.comparePwd(user.password, password);
					return isPasswordOk ? done(null, user) : done(null, false);
				}
			} catch (error) {
				console.error(error);
				done(error);
			}
		}
	)
);
