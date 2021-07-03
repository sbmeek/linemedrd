import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MSchema } from 'mongoose';

import { Specialties, SpecialtiesDocument } from './specialties.model';
import {
	CreateSpecialtiesInput,
	UpdateSpecialtiesInput
} from './specialties.input';

@Injectable()
export class SpecialtiesService {
	constructor(
		@InjectModel(Specialties.name)
		private specialtyModel: Model<SpecialtiesDocument>
	) {}

	getById(_id: MSchema.Types.ObjectId) {
		return this.specialtyModel.findById(_id).exec();
	}

	list() {
		return this.specialtyModel.find().exec();
	}

	create(payload: CreateSpecialtiesInput) {
		const newSpecialty = new this.specialtyModel(payload);
		return newSpecialty.save();
	}

	update(payload: UpdateSpecialtiesInput) {
		return this.specialtyModel
			.findByIdAndUpdate(payload._id, payload, { new: true })
			.exec();
	}

	delete(_id: MSchema.Types.ObjectId) {
		return this.specialtyModel.findByIdAndDelete(_id).exec();
	}
}
