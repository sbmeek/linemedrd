// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import session from 'express-session';

import { AppModule } from './app/app.module';
import {
	corsOptions,
	sessionOptions,
	validationPipeOptions
} from './app/lib/options';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const port = process.env.PORT || 3000;
	app.use(session(sessionOptions));
	app.useGlobalPipes(new ValidationPipe(validationPipeOptions));
	app.enableCors(corsOptions);
	await app.listen(port);
	console.log(`Running on::${port}`);
}

bootstrap();
