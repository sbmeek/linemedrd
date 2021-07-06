import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MSchema } from 'mongoose';

import { Doctor, DoctorDocument } from './doctor.model';
import {
	CreateDoctorInput,
	ListDoctorInput,
	UpdateDoctorInput
} from './doctor.input';

@Injectable()
export class DoctorService {
	constructor(
		@InjectModel(Doctor.name)
		private drModel: Model<DoctorDocument>
	) {}

	getById(_id: MSchema.Types.ObjectId) {
		return this.drModel.findById(_id).exec();
	}

	list(filters: ListDoctorInput) {
		return this.drModel.find({ ...filters }).exec();
	}

	async create(payload: CreateDoctorInput) {
		const newDr = new this.drModel(payload);
		return newDr.save();
	}

	update(payload: UpdateDoctorInput) {
		return this.drModel
			.findByIdAndUpdate(payload._id, payload, { new: true })
			.exec();
	}

	delete(_id: MSchema.Types.ObjectId) {
		return this.drModel.findByIdAndDelete(_id).exec();
	}
}
