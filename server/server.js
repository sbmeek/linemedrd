const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const sessions = require('client-sessions');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 4000;

app.set('json spaces', 2);

app.use(helmet());
app.use(cors({ origin: 'http://127.0.0.1:3000' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(
	sessions({
		cookieName: 'medTkn',
		secret: process.env.SESSION_SECRET,
		duration: 30 * 60000,
		cookie: {
			httpOnly: true,
			secure: false
		}
	})
);

//Init db
require('./db');

app.use('/user', require('./routes/user.routes'));

app.listen(PORT, () => console.log(`Server up ::${PORT}`));
