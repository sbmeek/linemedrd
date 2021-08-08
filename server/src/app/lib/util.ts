import * as path from 'path';
import { promises as fs } from 'fs';
import { Connection, Collection } from 'mongoose';

export const dbConnectionHandler = (conn: Promise<Connection>) => {
	conn
		.then(async conn => {
			console.log(`Connected to db: ${conn.name}`);
			if (process.env.NODE_ENV !== 'test') return;
			await conn.db.dropDatabase();
			const mockDirPath = path.join(process.cwd(), 'src', 'app', 'mock');
			const entities = await fs.readdir(mockDirPath);

			for (let entity of entities) {
				const { default: data } = await import(path.join(mockDirPath, entity));
				entity = entity.split('.')[0];
				console.log(`Loading ${entity} with ${data.length} doc(s).`);
				let collection = conn.collections[entity];
				!collection &&
					(collection = (await conn.createCollection(entity)) as Collection);
				await collection.insertMany(data);
				console.log(`${entity} inserted.`);
			}

			console.log('Test data has been restored.');
		})
		.catch((err: string) => {
			console.error(err);
			process.exit(1);
		});
	return conn;
};

export const logToFile = async (err: { stack: any }) => {
	console.error(err);
	const logsDir = 'logs';
	const logsDirPath = path.join(process.cwd(), logsDir);
	const [date, time] = new Date().toISOString().split('T');
	const errLogPath = path.join(logsDirPath, `${date}.log`);
	try {
		await fs.access(logsDirPath);
	} catch (error) {
		await fs.mkdir(logsDirPath);
		console.log(`Logs dir created at ${logsDirPath}`);
	}
	await fs.appendFile(errLogPath, `[${time}]: ${err.stack}\n\n`);
	console.log(`Log created: ${errLogPath}`);
};
