const { Schema, model } = require('mongoose');

/*
Doctores (ID, Nombre, Especialidad, Consultorio_ID).
*/

const doctorSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	specialty: {
		type: String,
		required: true
	},
	ID_Consult: {
		type: Schema.Types.ObjectId,
		ref: 'Consult',
		required: true
	}
});

module.exports = model('Doctor', doctorSchema);
