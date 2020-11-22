const { Router } = require('express');
const Schedule = require('../models/Schedule');
const MedAppoint = require('../models/medAppoint');
const router = Router();

//read all
router.get('/readSchedules/:cons_id', async (req, res) => {
	try {
		const cons_id = req.params.cons_id;
		const schedule = await Schedule.find({ ID_Consult: cons_id });
		res.json({
			ok: true,
			schedule: schedule
		});
	} catch (err) {
		console.error(err);
		res.json({
			ok: false,
			err: process.env.NODE_ENV === 'development' ? err.stack : 'Bobo happen...'
		});
	}
});

//read one
router.get('/readSchedules/:cons_id/:id', async (req, res) => {
	try {
		const cons_id = req.params.cons_id;
		const id = req.params.id;
		const sel_schedule = await Schedule.findById(id, { ID_Consult: cons_id });
		res.json({
			ok: true,
			schedule: sel_schedule
		});
	} catch (err) {
		console.error(err);
		res.json({
			ok: false,
			err: process.env.NODE_ENV === 'development' ? err.stack : 'Bobo happen...'
		});
	}
});

//read an appoint in a schedule
router.get('/readAppoint/:cons_id/:appnt_id', async (req, res) => {
	try {
		const cons_id = req.params.cons_id;
		const appnt_id = req.params.appnt_id;
		const sel_appoint = await MedAppoint.find({
			ID_Consult: cons_id,
			_id: appnt_id
		});
		res.json({
			ok: true,
			appoint: sel_appoint
		});
	} catch (err) {
		console.error(err);
		res.json({
			ok: false,
			err: process.env.NODE_ENV === 'development' ? err.stack : 'Bobo happen...'
		});
	}
});

//read all appoints in a schedule
router.get('/readAppoints/:cons_id', async (req, res) => {
	try {
		const cons_id = req.params.cons_id;
		const allAppnts = await MedAppoint.find({ ID_Consult: cons_id });
		res.json({
			ok: true,
			appoints: allAppnts
		});
	} catch (err) {
		console.error(err);
		res.json({
			ok: false,
			err: process.env.NODE_ENV === 'development' ? err.stack : 'Bobo happen...'
		});
	}
});

//create schedule
router.post('/createSchedule', async (req, res) => {
	try {
		const { body } = req;
		const schedule = new Schedule(body);
		const savedSchedule = await schedule.save();
		res.json({ ok: true, saved: savedSchedule });
	} catch (err) {
		console.error(err);
		res.json({
			ok: false,
			err: process.env.NODE_ENV === 'development' ? err.stack : 'Bobo happen...'
		});
	}
});

//update status of appoint
router.put('/upAppointSt/:cons_id/:appnt_id', async (req, res) => {
	try {
		const cons_id = req.params.cons_id;
		const appnt_id = req.params.appnt_id;
		const { status } = req.body;
		await MedAppoint.findOneAndUpdate(
			{ _id: appnt_id, ID_Consult: cons_id },
			{ status: status }
		);
		res.json({
			ok: true,
			msg: 'Estado de la cita actualizado'
		});
	} catch (err) {
		console.error(err);
		res.json({
			ok: false,
			err: process.env.NODE_ENV === 'development' ? err.stack : 'Bobo happen...'
		});
	}
});

module.exports = router;
