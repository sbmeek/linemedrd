const { ObjectID } = require('mongodb');

module.exports = [
	{
		_id: new ObjectID('60e659e5c72c462a685c8dfe'),
		isUserAdressPublic: false,
		isPhoneNumberPublic: false,
		isHomeNumberPublic: false,
		isEmailPublic: true
	},
	{
		_id: new ObjectID('610d606290bef41138fa6e9c'),
		isEmailPublic: false,
		isHomeNumberPublic: false,
		isPhoneNumberPublic: false,
		isUserAdressPublic: false
	},
	{
		_id: new ObjectID('610d605090bef41138fa6e9a'),
		isEmailPublic: true,
		isHomeNumberPublic: false,
		isPhoneNumberPublic: true,
		isUserAdressPublic: false
	},
	{
		_id: new ObjectID('610d603c90bef41138fa6e98'),
		isEmailPublic: true,
		isHomeNumberPublic: true,
		isPhoneNumberPublic: true,
		isUserAdressPublic: true
	}
];
