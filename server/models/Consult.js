const { Schema, model } = require('mongoose');

/*
Consultorios (ID, Nombre, Dirección).
*/

const consultSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	manager: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		unique: true,
		required: true
	},
	dir: String
});

module.exports = model('Consult', consultSchema);
