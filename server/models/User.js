const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

/*
	ID, Nombre, Apellido, Email, Contraseña, Fecha_Nac, Dirección, Cédula, Seguro_Med, Cod_Conf_Email, Conf_Email, Cod_Rec_Contra, Rol
*/

const medInsuranceSchema = new Schema({
	number: {
		required: true,
		unique: true,
		type: String
	},
	company: {
		type: String,
		required: true
	}
});

const userSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	lastname: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		required: true,
		type: String
	},
	birthDate: {
		type: Date,
		required: true
	},
	address: String,
	idCard: String,
	medInsurance: medInsuranceSchema,
	codConfEmail: String,
	isEmailConfirmed: Boolean,
	codRecPwd: String,
	Role: Number
});

userSchema.methods.hashPwd = async (pwd) => {
	try {
		const salt = await bcrypt.genSalt(10);
		const hash = await bcrypt.hash(pwd, salt);
		return hash;
	} catch (err) {
		console.error(err);
	}
};

userSchema.methods.comparePwd = async (dbPwd, enteredPwd) => {
	return await bcrypt.compare(enteredPwd, dbPwd);
};

module.exports = model('User', userSchema);
