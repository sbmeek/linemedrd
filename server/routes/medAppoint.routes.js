const { Router } = require('express');
const MedAppoint = require('../models/medAppoint');
const Dr = require('../models/Doctor');
const Consult = require('../models/Consult');
const router = Router();

//create
router.post('/createAppoint', async (req, res) => {
	try {
		const { body } = req;
		const appoint = new MedAppoint(body);
		const savedAppoint = await appoint.save();
		res.json({ ok: true, savedAppoint });
	} catch (err) {
		console.error(err);
		res.json({
			ok: false,
			err: process.env.NODE_ENV === 'development' ? err.stack : 'Bueno miop...'
		});
	}
});

//read one
router.get('/readAppoints/:user_id/:id', async (req, res) => {
	try {
		const user_id = req.params.user_id;
		const id = req.params.id;
		const seletedAppoint = await MedAppoint.findOne({
			_id: id,
			ID_User: user_id
		});
		res.json({
			ok: true,
			appoint: seletedAppoint
		});
	} catch (err) {
		console.error(err);
		res.json({
			ok: false,
			err: process.env.NODE_ENV === 'development' ? err.stack : 'Bueno miop...'
		});
	}
});

//read all
router.get('/readAppoints/:user_id', async (req, res) => {
	try {
		let resAppnts = [];
		const user_id = req.params.user_id;
		const appoints = await MedAppoint.find({ ID_User: user_id });
		for (appnt of appoints) {
			const dr = await Dr.findById(appnt['ID_Doctor']);
			const cons = await Consult.findById(appnt['ID_Consult']);
			var resAppnt = {
				ID_User: appnt['ID_User'],
				ID_Doctor: appnt['ID_Doctor'],
				ID_Consult: appnt['ID_Consult'],
				emission_date: appnt['emission_date'],
				realization_date: appnt['realization_date'],
				payment: appnt['payment'],
				ins_validation: appnt['ins_validation'],
				status: appnt['status'],
				drName: dr['name'],
				drHour: dr['horary'],
				spc: dr['speciality'],
				consDir: cons['dir']
			};
			resAppnts.push(resAppnt);
		}
		res.json({
			ok: true,
			appnts: resAppnts
		});
	} catch (err) {
		console.error(err);
		res.json({
			ok: false,
			err: process.env.NODE_ENV === 'development' ? err.stack : 'Bueno miop...'
		});
	}
});

//update one
router.put('/upAppointSt/:id', async (req, res) => {
	try {
		const id = req.params.id;
		const { status } = req.body;
		await MedAppoint.findOneAndUpdate({ _id: id }, { status: status });
		res.json({
			ok: true,
			msg: 'Estado de la cita actualizado'
		});
	} catch (err) {
		console.error(err);
		res.json({
			ok: false,
			err: process.env.NODE_ENV === 'development' ? err.stack : 'Bueno miop...'
		});
	}
});

module.exports = router;
