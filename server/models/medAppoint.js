const { Schema, model } = require('mongoose');

/*
Citas (ID, ID_Usuario, ID_Doctor, ID_Consultorio, Fecha_Emisión, Fecha_Realización,
Pago, Vald_Seguro). 
*/

const medAppointSchema = new Schema({
	ID_User: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	ID_Doctor: {
		type: Schema.Types.ObjectId,
		ref: 'Doctor',
		required: true
	},
	ID_Consult: {
		type: Schema.Types.ObjectId,
		ref: 'Consult',
		required: true
	},
	emission_date: {
		type: Date,
		required: true
	},
	realization_date: {
		type: Date,
		required: true
	},
	payment: {
		type: Number,
		required: true
	},
	ins_validation: {
		type: Boolean,
		required: true
	},
	status: {
		type: String,
		default: 'Pendiente'
	}
});

module.exports = model('MedAppoint', medAppointSchema);
