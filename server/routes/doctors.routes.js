const { Router } = require('express');
const Dr = require('../models/Doctor');
const router = Router();

//read all
router.get('/readAll', async (req, res) => {
	try {
		const drs = await Dr.find();
		res.json({
			ok: true,
			drs: drs
		});
	} catch (err) {
		console.error(err);
		res.json({
			ok: false,
			err:
				process.env.NODE_ENV === 'development'
					? err.stack
					: 'Problemas de dotores...'
		});
	}
});

//read one
router.get('/readOne/:id', async (req, res) => {
	try {
		const id = req.params.id;
		const dr = await Dr.findById(id);
		res.json({
			ok: true,
			dr: dr
		});
	} catch (err) {
		console.error(err);
		res.json({
			ok: false,
			err:
				process.env.NODE_ENV === 'development'
					? err.stack
					: 'Problemas de dotores...'
		});
	}
});

//read all by speciality
router.get('/readSpc/:spc', async (req, res) => {
	try {
		const spc = req.params.spc;
		const drs = await Dr.find({ specialty: spc });
		res.json({
			ok: true,
			drs: drs
		});
	} catch (err) {
		console.error(err);
		res.json({
			ok: false,
			err:
				process.env.NODE_ENV === 'development'
					? err.stack
					: 'Problemas de dotores...'
		});
	}
});

//create
router.post('/createDr', async (req, res) => {
	try {
		const { body } = req;
		const newDr = new Dr(body);
		const savedDr = await newDr.save();
		res.json({
			ok: true,
			newDr: savedDr
		});
	} catch (err) {
		console.error(err);
		res.json({
			ok: false,
			err:
				process.env.NODE_ENV === 'development'
					? err.stack
					: 'Problemas de dotores...'
		});
	}
});

module.exports = router;
