// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import session from 'express-session';

import {
	corsOptions,
	sessionOptions,
	validationPipeOptions
} from 'app/config/options';
import { AppModule } from 'app/app.module';
import { AllExceptionsFilter } from 'app/lib/handlers';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const port = process.env.PORT || 3000;
	app.use(session(sessionOptions));
	app.useGlobalPipes(new ValidationPipe(validationPipeOptions));
	app.enableCors(corsOptions);
	app.useGlobalFilters(new AllExceptionsFilter());
	await app.listen(port);
	console.log(`Running on::${port}`);
}

bootstrap();
