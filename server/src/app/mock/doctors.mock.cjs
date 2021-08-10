const { ObjectID } = require('mongodb');

module.exports = [
	{
		_id: new ObjectID('61117285fc13ae0f7500000f'),
		userId: new ObjectID('610d7ffffc13ae707a000017'),
		specialties: [new ObjectID('610d7f50fc13ae328a000001')],
		workday: [
			new ObjectID('61115254fc13ae79ba000050'),
			new ObjectID('61115254fc13ae79ba000051')
		],
		patientLimit: 9,
		ars: ['ARS La Colonial', 'ARS BMI', 'ARS Palic Salud'],
		description:
			'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
		imageUrl: 'http://dummyimage.com/224x100.png/ff4444/ffffff',
		ratingTotal: 1.8,
		exequatur: '4156747638',
		organization: 'Fanoodle'
	},
	{
		_id: new ObjectID('61117285fc13ae0f75000010'),
		userId: new ObjectID('610d7ffffc13ae707a000019'),
		specialties: [new ObjectID('610d7f50fc13ae328a00000e')],
		workday: [
			new ObjectID('61115254fc13ae79ba000050'),
			new ObjectID('61115254fc13ae79ba000051')
		],
		patientLimit: 7,
		ars: ['ARS BMI', 'ARS La Colonial', 'ARS Palic Salud'],
		description:
			'Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
		imageUrl: 'http://dummyimage.com/168x100.png/ff4444/ffffff',
		ratingTotal: 4.1,
		exequatur: '7252314677',
		organization: 'Voolith'
	},
	{
		_id: new ObjectID('61117285fc13ae0f75000011'),
		userId: new ObjectID('610d7ffffc13ae707a00001a'),
		specialties: [new ObjectID('610d7f50fc13ae328a000007')],
		workday: [
			new ObjectID('61115254fc13ae79ba000050'),
			new ObjectID('61115254fc13ae79ba000051')
		],
		patientLimit: 2,
		ars: ['ARS Renacer', 'ARS La Colonial', 'Primera ARS Humano'],
		description: 'In congue. Etiam justo.',
		imageUrl: 'http://dummyimage.com/167x100.png/cc0000/ffffff',
		ratingTotal: 2.3,
		exequatur: '8400877373',
		organization: 'Bubblemix'
	},
	{
		_id: new ObjectID('61117285fc13ae0f75000012'),
		userId: new ObjectID('610d7ffffc13ae707a00001b'),
		specialties: [new ObjectID('610d7f50fc13ae328a000014')],
		workday: [
			new ObjectID('61115254fc13ae79ba000050'),
			new ObjectID('61115254fc13ae79ba000051')
		],
		patientLimit: 4,
		ars: ['ARS Universal', 'Seguro Nacional de Salud (SENASA)', 'ARS BMI'],
		description:
			'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
		imageUrl: 'http://dummyimage.com/180x100.png/5fa2dd/ffffff',
		ratingTotal: 2.2,
		exequatur: '5994652296',
		organization: 'Flipbug'
	},
	{
		_id: new ObjectID('61117285fc13ae0f75000013'),
		userId: new ObjectID('610d7ffffc13ae707a00001d'),
		specialties: [new ObjectID('610d7f50fc13ae328a000001')],
		workday: [
			new ObjectID('61115254fc13ae79ba000050'),
			new ObjectID('61115254fc13ae79ba000051')
		],
		patientLimit: 3,
		ars: ['ARS Universal', 'ARS Palic Salud', 'ARS Monumental'],
		description:
			'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
		imageUrl: 'http://dummyimage.com/112x100.png/dddddd/000000',
		ratingTotal: 3.9,
		exequatur: '8611844726',
		organization: 'Photobean'
	}
];
