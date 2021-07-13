import { join } from 'path';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { GqlModuleOptions } from '@nestjs/graphql';
import { MongooseModuleOptions } from '@nestjs/mongoose';
import { ServeStaticModuleOptions } from '@nestjs/serve-static';

const gqlErrorFormatter = (error: GraphQLError) => {
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

export const dbUri = {
	production: process.env.DB_URI_PROD,
	development: process.env.DB_URI_DEV,
	test: process.env.DB_URI_TEST
};

export const mongoOptions: MongooseModuleOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: true,
	useCreateIndex: true,
	connectTimeoutMS: 1000,
	connectionFactory: (conn: Promise<{ name: string }>) => {
		conn
			.then(({ name }) => console.log(`Connected to db: ${name}`))
			.catch((err: string) => console.error(`[HAY BOBO] ${err}`));
		return conn;
	}
};

export const gqlOptions: GqlModuleOptions = {
	playground: process.env.NODE_ENV === 'development',
	autoSchemaFile: join(__dirname, 'src/schema.gql'),
	sortSchema: true,
	fieldResolverEnhancers: ['interceptors'],
	formatError: (error: GraphQLError) => gqlErrorFormatter(error)
};

export const serveStaticOptions: ServeStaticModuleOptions = {
	rootPath: join(process.cwd(), '..', 'client', 'build')
};
