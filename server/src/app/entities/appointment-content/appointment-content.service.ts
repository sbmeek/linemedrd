import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MSchema } from 'mongoose';
import archiver from 'archiver';
import fs from 'fs';

import {
	AppointmentContent,
	ApmtContentDocument
} from './appointment-content.model';
import {
	CreateApmtContentInput,
	UpdateApmtContentInput,
	ListApmtContentInput
} from './appointment-content.input';

@Injectable()
export class ApmtContentService {
	private filesPath: string;
	private archive: archiver.Archiver;

	constructor(
		@InjectModel(AppointmentContent.name)
		private contentModel: Model<ApmtContentDocument>
	) {
		this.filesPath = process.cwd() + '\\files\\';
		this.archive = archiver('zip', {
			zlib: { level: 9 }
		});
	}

	getById(_id: MSchema.Types.ObjectId) {
		return this.contentModel.findById(_id).exec();
	}

	list(filters?: ListApmtContentInput) {
		return this.contentModel.find({ ...filters }).exec();
	}

	create(payload: CreateApmtContentInput) {
		const newContent = new this.contentModel(payload);
		return newContent.save();
	}

	update(payload: UpdateApmtContentInput) {
		return this.contentModel
			.findByIdAndUpdate(payload._id, payload, { new: true })
			.exec();
	}

	delete(_id: MSchema.Types.ObjectId) {
		return this.contentModel.findByIdAndDelete(_id).exec();
	}

	async handleFileUpload(
		_id: MSchema.Types.ObjectId,
		files: Array<Express.Multer.File>
	) {
		const currentContent = await this.getById(_id);
		for (const file of files) {
			currentContent.updateOne({ $push: { attachments: file.filename } });
		}
		return {
			ok: true,
			_id: currentContent._id,
			attachments: currentContent.attachments
		};
	}

	async returnZipFile(_id: MSchema.Types.ObjectId): Promise<string> {
		const currentContent = await this.getById(_id);
		const zipName = `${currentContent.appointmentDate}-Appointment.zip`;
		const output = fs.createWriteStream(this.filesPath + zipName);

		this.archive.on('error', err => {
			throw err;
		});
		this.archive.on('warning', err => {
			if (err.code === 'ENOENT') console.log(err);
			else throw err;
		});
		this.archive.pipe(output);

		for (const attachment of currentContent.attachments) {
			const attachmentPath = this.filesPath + attachment;
			this.archive.append(fs.createReadStream(attachmentPath), {
				name: attachment
			});
		}
		this.archive.finalize();

		return new Promise(res => {
			output.once('close', () => {
				console.log(this.archive.pointer() + ' total bytes');
				console.log(
					'archiver has been finalized and the output file descriptor has closed.'
				);
				res(this.filesPath + zipName);
			});
		});
	}
}
