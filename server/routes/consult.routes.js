const { Router } = require('express');
const router = Router();
const Consult = require('../models/Consult');

//create
router.post('/create', async (req, res) => {
	try {
		const { body } = req;
		const newConsult = new Consult(body);
		const savedConsult = await newConsult.save();
		res.json({
			ok: true,
			newC: savedConsult
		});
	} catch (err) {
		console.error(err);
		res.json({
			ok: false,
			err:
				process.env.NODE_ENV === 'development'
					? err.stack
					: 'bobo con consultorios...'
		});
	}
});

//read All
router.get('/readAll', async (req, res) => {
	try {
		const consults = await Consult.find();
		res.json({
			ok: true,
			cons: consults
		});
	} catch (err) {
		console.error(err);
		res.json({
			ok: false,
			err:
				process.env.NODE_ENV === 'development'
					? err.stack
					: 'bobo con consultorios...'
		});
	}
});

//read one
router.get('/readOne/:id', async (req, res) => {
	try {
		const id = req.params.id;
		const consult = await Consult.findById(id);
		res.json({
			ok: true,
			cons: consult
		});
	} catch (err) {
		console.error(err);
		res.json({
			ok: false,
			err:
				process.env.NODE_ENV === 'development'
					? err.stack
					: 'bobo con consultorios...'
		});
	}
});

module.exports = router;
