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
	constructor(
		@InjectModel(AppointmentContent.name)
		private contentModel: Model<ApmtContentDocument>
	) {}

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

	async returnZipFile(_id: MSchema.Types.ObjectId) {
		const currentContent = await this.getById(_id);
		const archive = archiver('zip', {
			zlib: { level: 9 }
		});

		for (const attachment of currentContent.attachments) {
			console.log(attachment);
			const file = fs.createWriteStream(attachment);
			file.on('close', () => {
				console.log(archive.pointer() + ' total bytes');
				console.log(
					'archiver has been finalized and the output file descriptor has closed.'
				);
			});
		}
	}
}
