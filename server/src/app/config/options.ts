import * as path from 'path';
import { diskStorage } from 'multer';
import { Connection } from 'mongoose';
import { GraphQLError } from 'graphql';
import MongoStore from 'connect-mongo';
import { JwtModuleOptions } from '@nestjs/jwt';
import { GqlModuleOptions } from '@nestjs/graphql';
import { IAuthModuleOptions } from '@nestjs/passport';
import { MailerOptions } from '@nestjs-modules/mailer';
import { MongooseModuleOptions } from '@nestjs/mongoose';
import { MemoryStore, SessionOptions } from 'express-session';
import { ServeStaticModuleOptions } from '@nestjs/serve-static';
import { ValidationError, ValidationPipeOptions } from '@nestjs/common';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';

import {
	gqlErrorFormatter,
	validationExceptionHandler
} from 'app/lib/handlers';
import { ConfigModuleOptions } from 'app/lib/types';
import { dbConnectionHandler, renameFile } from 'app/lib/util';

const {
	G_MAIL_ACCOUNT,
	G_CLIENT_ID,
	G_CLIENT_SECRET,
	G_REFRESH_TOKEN,
	G_ACCESS_TOKEN
} = process.env;

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
	connectionFactory: (conn: Promise<Connection>) => dbConnectionHandler(conn)
};

export const corsOptions = {
	origin: process.env.CORS_ALLOWED_HOSTS.split(','),
	credentials: true
};

export const gqlOptions: GqlModuleOptions = {
	playground: process.env.NODE_ENV === 'development',
	autoSchemaFile: path.join(__dirname, 'src/schema.gql'),
	sortSchema: true,
	fieldResolverEnhancers: ['interceptors'],
	formatError: (error: GraphQLError) => gqlErrorFormatter(error),
	cors: corsOptions
};

export const serveStaticOptions: ServeStaticModuleOptions = {
	rootPath: path.join(process.cwd(), '..', 'client', 'dist')
};

export const jwtOptions: JwtModuleOptions = {
	secret: process.env.SESSION_SECRET,
	signOptions: { expiresIn: '1h' }
};

export const passportOptions: IAuthModuleOptions = {
	defaultStrategy: 'jwt',
	session: false
};

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

export const sessionCookieName = '_ss';

const sessionStore =
	process.env.NODE_ENV === 'development'
		? new MemoryStore()
		: new MongoStore({ mongoUrl: dbUri[process.env.NODE_ENV] });

export const sessionOptions: SessionOptions = {
	name: "sid?'",
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: true,
	unset: 'destroy',
	store: sessionStore,
	cookie: {
		httpOnly: true,
		maxAge: 120 * 60000,
		secure: false
	}
};

export const configOptions: ConfigModuleOptions = {
	env: process.env.NODE_ENV
};

export const filesInterceptorOptions: MulterOptions = {
	storage: diskStorage({
		destination: process.cwd() + '\\files',
		filename: renameFile
	})
};

export const validationPipeOptions: ValidationPipeOptions = {
	transform: true,
	exceptionFactory: (errors: ValidationError[]) =>
		validationExceptionHandler(errors)
};
