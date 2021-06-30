import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MSchema } from 'mongoose';

import { Days, DaysDocument } from './days.model';
import { CreateDaysInput, UpdateDaysInput } from './days.input';

@Injectable()
export class DaysService {
	constructor(
		@InjectModel(Days.name)
		private daysModel: Model<DaysDocument>
	) {}

	getById(_id: MSchema.Types.ObjectId) {
		return this.daysModel.findById(_id).exec();
	}

	create(payload: CreateDaysInput) {
		const newDays = new this.daysModel(payload);
		return newDays.save();
	}

	update(payload: UpdateDaysInput) {
		return this.daysModel
			.findByIdAndUpdate(payload._id, payload, { new: true })
			.exec();
	}

	delete(_id: MSchema.Types.ObjectId) {
		return this.daysModel.findByIdAndDelete(_id).exec();
	}
}
