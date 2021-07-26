import * as path from 'path';
import { promises as fs } from 'fs';
import { GqlModuleOptions } from '@nestjs/graphql';
import { MongooseModuleOptions } from '@nestjs/mongoose';
import { JwtModuleOptions } from '@nestjs/jwt';
import { IAuthModuleOptions } from '@nestjs/passport';
import { ServeStaticModuleOptions } from '@nestjs/serve-static';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { Connection, Collection } from 'mongoose';
import { MailerOptions } from '@nestjs-modules/mailer';

const {
	G_MAIL_ACCOUNT,
	G_CLIENT_ID,
	G_CLIENT_SECRET,
	G_REFRESH_TOKEN,
	G_ACCESS_TOKEN
} = process.env;

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
	connectionFactory: (conn: Promise<Connection>) => {
		conn
			.then(async conn => {
				console.log(`Connected to db: ${conn.name}`);
				if (process.env.NODE_ENV !== 'test') return;
				await conn.db.dropDatabase();
				const mockDirPath = path.join(process.cwd(), 'src', 'app', 'mock');
				const entities = await fs.readdir(mockDirPath);

				for (let entity of entities) {
					const data = await import(path.join(mockDirPath, entity));
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
			.catch((err: string) => console.error(`[HAY BOBO] ${err}`));
		return conn;
	}
};

export const gqlOptions: GqlModuleOptions = {
	playground: process.env.NODE_ENV === 'development',
	autoSchemaFile: path.join(__dirname, 'src/schema.gql'),
	sortSchema: true,
	fieldResolverEnhancers: ['interceptors'],
	formatError: (error: GraphQLError) => gqlErrorFormatter(error),
	cors: { origin: process.env.CORS_ALLOWED_HOSTS.split(',') }
};

export const serveStaticOptions: ServeStaticModuleOptions = {
	rootPath: path.join(process.cwd(), '..', 'client', 'build')
};

export const jwtOptions: JwtModuleOptions = {
	secret: process.env.SESSION_SECRET,
	signOptions: { expiresIn: '1h' }
};

export const passportOptions: IAuthModuleOptions = { defaultStrategy: 'jwt' };

export const mailerOptions: MailerOptions = {
	transport: {
		service: 'gmail',
		host: 'linemedrd.herokuapp.com',
		auth: {
			type: 'OAuth2',
			user: G_MAIL_ACCOUNT,
			clientId: G_CLIENT_ID,
			clientSecret: G_CLIENT_SECRET,
			refreshToken: G_REFRESH_TOKEN,
			accessToken: G_ACCESS_TOKEN
		}
	},
	defaults: {
		from: G_MAIL_ACCOUNT
	}
};
