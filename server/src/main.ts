// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationError, ValidationPipe } from '@nestjs/common';
import { UserInputError } from 'apollo-server-express';

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
	await app.listen(port);
	console.log(`Running on ::${port}`);
}

bootstrap();
