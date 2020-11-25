const { Router } = require('express');
const Schedule = require('../models/Schedule');
const MedAppoint = require('../models/medAppoint');
const Consult = require('../models/Consult');
const User = require('../models/User');
const Dr = require('../models/Doctor');
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
			err:
				process.env.NODE_ENV === 'development' ? err.stack : 'Bobo happend...'
		});
	}
});

//read by status
router.get('/readStatus/:manager/:status', async (req, res) => {
	try {
		let resSchs = [];
		const status = req.params.status;
		const manager = req.params.manager;
		const cons = await Consult.findOne({ manager: manager });
		const schInfo = await MedAppoint.find({
			ID_Consult: cons['_id'],
			status: status
		});
		for (let sch of schInfo) {
			const dr = await Dr.findById(sch['ID_Doctor']);
			const user = await User.findById(sch['ID_User']);
			let resSch = {
				appntID: sch['_id'],
				consID: cons['_id'],
				patName: user['name'],
				patLastn: user['lastname'],
				patNIns: user['medInsurance']['number'],
				patIdCard: user['idCard'],
				patEmail: user['email'],
				appntDate: sch['realization_date'],
				drHour: dr['horary'],
				drName: dr['name'],
				drSpc: dr['speciality'],
				status: sch['status']
			};
			resSchs.push(resSch);
		}
		res.json({
			ok: true,
			schedule: resSchs
		});
	} catch (err) {
		console.error(err);
		res.json({
			ok: false,
			err:
				process.env.NODE_ENV === 'development' ? err.stack : 'Bobo happend...'
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
