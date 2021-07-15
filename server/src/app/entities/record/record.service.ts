import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MSchema } from 'mongoose';

import { Record, RecordDocument } from './record.model';
import {
	CreateRecordInput,
	ListRecordInput,
	UpdateRecordInput
} from './record.input';

@Injectable()
export class RecordService {
	constructor(
		@InjectModel(Record.name)
		private recordModel: Model<RecordDocument>
	) {}

	getById(_id: MSchema.Types.ObjectId) {
		return this.recordModel.findById(_id).exec();
	}

	list(filters: ListRecordInput) {
		return this.recordModel.find({ ...filters }).exec();
	}

	create(payload: CreateRecordInput) {
		const newRecord = new this.recordModel(payload);
		return newRecord.save();
	}

	update(payload: UpdateRecordInput) {
		return this.recordModel
			.findByIdAndUpdate(payload._id, payload, { new: true })
			.exec();
	}

	delete(_id: MSchema.Types.ObjectId) {
		return this.recordModel.findByIdAndDelete(_id).exec();
	}
}
