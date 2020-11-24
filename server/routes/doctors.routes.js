const { Router } = require('express');
const Dr = require('../models/Doctor');
const Consults = require('../models/Consult');
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
		let resDrs = [];
		const spc = req.params.spc;
		const drs = await Dr.find({ speciality: spc });
		for (let dr of drs) {
			const Cons = await Consults.findById(dr['ID_Consult']);
			var resDr = {
				_id: dr['_id'],
				name: dr['name'],
				speciality: dr['speciality'],
				ID_Consult: dr['ID_Consult'],
				Cons_name: Cons['name'],
				Cons_dir: Cons['dir'],
				horary: dr['horary']
			};
			resDrs.push(resDr);
		}
		res.json({
			ok: true,
			drs: resDrs
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

//update horary
router.put('/upHorary/:id', async (req, res) => {
	try {
		const id = req.params.id;
		const { horary } = req.body;
		const upDr = await Dr.findByIdAndUpdate(id, { horary: horary });
		const resDr = await upDr.save();
		res.json({
			ok: true,
			upDr: resDr
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
