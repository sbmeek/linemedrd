import {
	Controller,
	Get,
	Post,
	Res,
	UploadedFiles,
	UseInterceptors
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { createReadStream } from 'fs';
import { join } from 'path';

import { ApmtContentService } from './appointment-content.service';

@Controller('appointment-content')
export class AppointmentContentController {
	constructor(private readonly contentService: ApmtContentService) {}

	@Post()
	@UseInterceptors(FilesInterceptor('files'))
	uploadFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
		console.log(files);
		return {
			ok: true
		};
	}

	@Get()
	getFile(@Res() res: Response) {
		const file = createReadStream(join(process.cwd(), 'package.json'));
		file.pipe(res);
	}
}
