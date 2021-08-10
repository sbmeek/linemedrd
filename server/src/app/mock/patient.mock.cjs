const { ObjectID } = require('mongodb');

module.exports = [
	{
		_id: new ObjectID('61115531fc13ae470b00017c'),
		userId: '610d7ffffc13ae707a000016',
		diseases: null,
		allergies: ['nueces']
	},
	{
		_id: new ObjectID('61115531fc13ae470b00017d'),
		userId: '610d7ffffc13ae707a000018',
		diseases: null,
		allergies: null
	},
	{
		_id: new ObjectID('61115531fc13ae470b00017e'),
		userId: '610d7ffffc13ae707a00001c',
		diseases: ['Diabetes', 'Calcemia'],
		allergies: ['nueces', 'mariscos', 'latex']
	},
	{
		_id: new ObjectID('61115531fc13ae470b00017f'),
		userId: '610d7ffffc13ae707a00001e',
		diseases: ['Diabetes', 'Parkinson'],
		allergies: ['nueces', 'latex', 'mariscos', 'niquel']
	},
	{
		_id: new ObjectID('61115531fc13ae470b000180'),
		userId: '610d7ffffc13ae707a00001f',
		diseases: ['Diabetes', 'SIDA'],
		allergies: ['acaros', 'insectos']
	}
];
