import {
	ExceptionFilter,
	Catch,
	ArgumentsHost,
	HttpException,
	HttpStatus
} from '@nestjs/common';
import { logToFile } from '../util';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
	async catch(exception: any, host: ArgumentsHost) {
		if (!exception.status || exception.status >= 500)
			await logToFile(exception);
		if (host.getType() !== 'http') return exception;
		const ctx = host.switchToHttp();
		const response = ctx.getResponse();
		const status =
			exception instanceof HttpException
				? exception.getStatus()
				: HttpStatus.INTERNAL_SERVER_ERROR;

		response.status(status).json({
			statusCode: status,
			ok: false,
			err:
				process.env.NODE_ENV === 'development'
					? exception.stack
					: 'Something went wrong...',
			timestamp: new Date().toISOString()
		});
	}
}
