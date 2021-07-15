import passport from 'passport';
import { Strategy as LocalStrat } from 'passport-local';
import { Strategy as JWTStrat } from 'passport-jwt';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { User, UserDocument } from 'app/entities/user/user.model';
const { SESSION_SECRET } = process.env;

export class UsePassportInit {
	constructor(
		@InjectModel(User.name)
		private userModel: Model<UserDocument>
	) {}

	public usePassport() {
		passport.use(
			new JWTStrat(
				{
					jwtFromRequest: (req: any) => (req.medTkn ? req.medTkn.medTkn : null),
					secretOrKey: SESSION_SECRET
				},
				(payload: any, done: any) => {
					this.userModel.findById(
						{ _id: payload.sub },
						(err: Error, user: User) => {
							if (err) return done(err, false);
							if (user) return done(null, user);
							else return done(null, false);
						}
					);
				}
			)
		);

		passport.use(
			new LocalStrat(
				{
					usernameField: 'email',
					passwordField: 'password'
				},
				async (email: string, password: string, done: any) => {
					try {
						const user = await this.userModel.findOne({ email }).exec();
						if (user === null) {
							return done(null, false);
						}
						if (!user.isEmailConfirmed) {
							return done({ emailNotConfirmed: true, ok: false }, false);
						} else {
							const isPasswordOk = await user.comparePwd(
								user.password,
								password
							);
							return isPasswordOk ? done(null, user) : done(null, false);
						}
					} catch (error) {
						console.error(error);
						done(error);
					}
				}
			)
		);
	}
}
