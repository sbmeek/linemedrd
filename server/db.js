const { connect, connection } = require('mongoose');

const connectionOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: true,
	useCreateIndex: true
};

const { DB_CONN_MDB_ATLAS } = process.env

connect(DB_CONN_MDB_ATLAS, connectionOptions);

connection.on('open', () => {
	console.log(`Connected to database on MDB_Atlas`);
});
