const { Router } = require('express');
const User = require('../models/User');
const { SESSION_SECRET } = process.env;
const JWT = require('jsonwebtoken');
const router = Router();

const decryptToken = (encryptedToken) => {
	try {
		const dToken = JWT.verify(encryptedToken, SESSION_SECRET);
		return dToken;
	} catch (error) {
		console.error(error);
	}
};

const isAdmin = async (tkn) => {
	const DecTkn = decryptToken(tkn);

	if (DecTkn === undefined) return;

	const id = DecTkn['sub'];
	console.log(id);
	const user = await User.findById(id);
	console.log(user);
	if (user['Role'] >= 2) return true;
	else return false;
};

//get all users
router.get('/readAll', async (req, res) => {
	try {
		const tkn = req.medTkn.medTkn;
		if (await isAdmin(tkn)) {
			const users = await User.find();
			res.json({
				ok: true,
				users: users
			});
		} else {
			res.json({
				ok: false,
				msg: 'va pal diablo'
			});
		}
	} catch (err) {
		console.error(err);
		res.json({
			ok: false,
			err:
				process.env.NODE_ENV === 'development'
					? err.stack
					: 'Problemas de admin...'
		});
	}
});

//update user role
router.put('/updateRole/:user_id', async (req, res) => {
	try {
		const tkn = req.medTkn.medTkn;
		if (await isAdmin(tkn)) {
			const user_id = req.params.user_id;
			const { role } = req.body;
			const upUser = await User.findByIdAndUpdate(user_id, { Role: role });
			res.json({
				ok: true,
				upUser: upUser
			});
		} else {
			res.json({
				ok: false,
				msg: 'ruede plis'
			});
		}
	} catch (err) {
		console.error(err);
		res.json({
			ok: false,
			err:
				process.env.NODE_ENV === 'development'
					? err.stack
					: 'Problemas de admin...'
		});
	}
});

module.exports = router;
