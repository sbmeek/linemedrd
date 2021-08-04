import * as path from 'path';
import { promises as fs } from 'fs';
import { Connection, Collection } from 'mongoose';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { UserInputError } from 'apollo-server-express';
import { ValidationError } from '@nestjs/common';

export const gqlErrorFormatter = (error: GraphQLError) => {
	if (error.message === 'VALIDATION_ERROR') {
		const extensions = {
			code: 'VALIDATION_ERROR',
			errors: []
		};

		Object.keys(error.extensions.invalidArgs).forEach(key => {
			const constraints = [];
			Object.keys(error.extensions.invalidArgs[key].constraints).forEach(
				_key => {
					constraints.push(error.extensions.invalidArgs[key].constraints[_key]);
				}
			);
			extensions.errors.push({
				field: error.extensions.invalidArgs[key].property,
				errors: constraints
			});
		});

		const graphQLFormattedError: GraphQLFormattedError = {
			message: 'VALIDATION_ERROR',
			extensions: extensions
		};
		return graphQLFormattedError;
	} else return error;
};

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

export const validationExceptionHandler = (errors: ValidationError[]) => {
	return new UserInputError('VALIDATION_ERROR', {
		invalidArgs: errors
	});
};
