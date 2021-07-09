import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MSchema } from 'mongoose';

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
		private apmtContentModel: Model<ApmtContentDocument>
	) {}

	getById(_id: MSchema.Types.ObjectId) {
		return this.apmtContentModel.findById(_id).exec();
	}

	list(filters?: ListApmtContentInput) {
		return this.apmtContentModel.find({ ...filters }).exec();
	}

	create(payload: CreateApmtContentInput) {
		const newContent = new this.apmtContentModel(payload);
		return newContent.save();
	}

	update(payload: UpdateApmtContentInput) {
		return this.apmtContentModel
			.findByIdAndUpdate(payload._id, payload, { new: true })
			.exec();
	}

	delete(_id: MSchema.Types.ObjectId) {
		return this.apmtContentModel.findByIdAndDelete(_id).exec();
	}
}
