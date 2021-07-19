// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import { NestFactory } from '@nestjs/core';
import * as session from 'client-sessions';
import { UserInputError } from 'apollo-server-express';
import { ValidationError, ValidationPipe } from '@nestjs/common';

import { AppModule } from './app/app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const port = process.env.PORT || 3000;
	app.useGlobalPipes(
		new ValidationPipe({
			transform: true,
			exceptionFactory: (errors: ValidationError[]) => {
				return new UserInputError('VALIDATION_ERROR', {
					invalidArgs: errors
				});
			}
		})
	);
	app.use(
		session({
			cookieName: 'medTkn',
			secret: process.env.SESSION_SECRET,
			duration: 120 * 60000,
			cookie: {
				ephemeral: false,
				httpOnly: true,
				secure: false
			}
		})
	);
	await app.listen(port);
	console.log(`Running on::${port}`);
}

bootstrap();
