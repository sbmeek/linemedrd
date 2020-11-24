const { Schema, model } = require('mongoose');

/*
Doctores (ID, Nombre, Especialidad, Consultorio_ID).
*/

const doctorSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	speciality: {
		type: String,
		required: true
	},
	ID_Consult: {
		type: Schema.Types.ObjectId,
		ref: 'Consult',
		required: true
	},
	horary: String
});

module.exports = model('Doctor', doctorSchema);
