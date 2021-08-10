const { ObjectID } = require('mongodb');

module.exports = [
	{
		_id: new ObjectID('61114c3cfc13ae0ace0000fa'),
		mon: true,
		tue: false,
		wed: true,
		thu: false,
		fri: false,
		sat: true,
		sun: false
	},
	{
		_id: new ObjectID('61114c3cfc13ae0ace0000fb'),
		mon: true,
		tue: true,
		wed: true,
		thu: false,
		fri: false,
		sat: false,
		sun: false
	},
	{
		_id: new ObjectID('61114c3cfc13ae0ace0000fc'),
		mon: true,
		tue: true,
		wed: true,
		thu: false,
		fri: false,
		sat: true,
		sun: true
	},
	{
		_id: new ObjectID('61114c3cfc13ae0ace0000fd'),
		mon: false,
		tue: true,
		wed: false,
		thu: true,
		fri: true,
		sat: false,
		sun: false
	}
];
