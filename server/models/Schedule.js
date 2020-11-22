const { Schema, model } = require('mongoose');

/*
Agendas (ID, ID_Consultorio, ID_Citas).
*/

const scheduleSchema = new Schema({
	ID_Consult: {
		type: Schema.Types.ObjectId,
		ref: 'Consult',
		required: true
	},
	ID_Appoint: {
		type: Schema.Types.ObjectId,
		ref: 'MedAppoint',
		required: true
	}
});

module.exports = model('Schedule', scheduleSchema);
