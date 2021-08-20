import {
	Get,
	Req,
	Res,
	Post,
	Controller,
	UploadedFiles,
	UseInterceptors
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Request, Response } from 'express';

import { filesInterceptorOptions } from 'app/config/options';
import { ApmtContentService } from './appointment-content.service';

@Controller('appointment-content')
export class AppointmentContentController {
	constructor(private readonly contentService: ApmtContentService) {}

	@Post()
	@UseInterceptors(FilesInterceptor('files', 10, filesInterceptorOptions))
	uploadFiles(
		@Req() req: Request,
		@UploadedFiles() files: Array<Express.Multer.File>
	) {
		const { _id } = req.body;
		return this.contentService.handleFileUpload(_id, files);
	}

	@Get()
	async getFile(@Req() req: Request, @Res() res: Response) {
		const { _id } = req.body;
		const zipFile = await this.contentService.returnZipFile(_id);
		res.sendFile(zipFile);
	}
}
