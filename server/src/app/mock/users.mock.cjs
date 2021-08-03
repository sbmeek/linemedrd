const { ObjectID } = require('mongodb');

module.exports = [
	{
		_id: new ObjectID('60e661fea4f3b42318be6745'),
		isActive: true,
		role: 'Administrador',
		isEmailConf: false,
		email: 'Johan829@hotmail.com',
		gender: 'M',
		lastname: 'Alonzo',
		name: 'Johan',
		password: '$2a$10$8lzDJZKN0Igz82UqQmKsQu3fYHC1707M.ZeRq8/v6tHKpXxiN.jgG',
		userAdress: new ObjectID('60de5d1fcd59f132507dab63'),
		userPreferences: new ObjectID('60e659e5c72c462a685c8dfe'),
		username: 'J_xyz',
		createdAt: new Date('2021-07-08T02:25:03.095Z'),
		updatedAt: new Date('2021-07-08T02:25:03.095Z')
	},
	{
		_id: new ObjectID('610899a94c8df928102b4165'),
		isActive: true,
		role: 'Administrador',
		isEmailConfirmed: true,
		email: 'angelmongrut@gmail.com',
		gender: 'M',
		lastname: 'Mongrut',
		name: 'Angel',
		password: '$2a$10$nXyWowtgt/g0nW0La5H2auZ.ooZ6ou2xfRb/Pz3g3eiDx/br/lWSe',
		userAdress: new ObjectID('60de5d1fcd59f132507dab63'),
		userPreferences: new ObjectID('60e659e5c72c462a685c8dfe'),
		username: 'angelsbv',
		createdAt: new Date(1627953578897),
		updatedAt: new Date(1627953579002),
		codConfEmail: '9fd714ab-e8e5-4572-9b63-abb7643d10e3'
	}
];
