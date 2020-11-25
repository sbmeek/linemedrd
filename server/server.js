const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const sessions = require('client-sessions');
const passport = require('passport');
const path = require('path');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 4000;

//Init db
require('./db');

app.set('json spaces', 2);

app.use(helmet());
app.use(
	helmet.contentSecurityPolicy({
		directives: {
			defaultSrc: ["'self'"],
			connectSrc: ["'self'", "http://api.adamix.net/"],
			imgSrc: ["'self'", 'data:'],
			styleSrc: ["'self'", "'unsafe-inline'"],
			objectSrc: ["'none'"],
			scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
		}
	})
);
app.use(cors({ origin: 'http://127.0.0.1:3000' }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));
app.use(passport.initialize());
app.use(
	sessions({
		cookieName: 'medTkn',
		secret: process.env.SESSION_SECRET,
		duration: 120 * 60000,
		cookie: {
			httpOnly: true,
			secure: false
		}
	})
);

app.use('/user', require('./routes/user.routes'));
app.use('/doctors', require('./routes/doctors.routes'));
app.use('/consults', require('./routes/consult.routes'));
app.use('/appoints', require('./routes/medAppoint.routes'));
app.use('/schedules', require('./routes/schedules.routes'));
app.use('/admin', require('./routes/admin.routes'));

if (process.env.NODE_ENV === 'production') {
	const clientBuildPath = path.resolve(path.join('..', 'client', 'build'));
	app.use(express.static(clientBuildPath));
	app.get('*', (_req, res) => {
		res.sendFile(path.join(clientBuildPath, 'index.html'));
	});
}

app.listen(PORT, () => console.log(`Server up ::${PORT}`));
