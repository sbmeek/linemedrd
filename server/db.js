const { connect, connection } = require('mongoose');

const connectionOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: true,
	useCreateIndex: true
};

const DB_URI = 'mongodb://localhost/linemedrd';

connect(DB_URI, connectionOptions);

connection.on('open', () => {
	console.log(`Connected to database on ${DB_URI}`);
});
