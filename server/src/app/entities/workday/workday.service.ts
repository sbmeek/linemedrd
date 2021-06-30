import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MSchema } from 'mongoose';

import { Workday, WorkdayDocument } from './workday.model';
import { CreateWorkdayInput, UpdateWorkdayInput } from './workday.input';

@Injectable()
export class WorkdayService {
	constructor(
		@InjectModel(Workday.name)
		private workdayModel: Model<WorkdayDocument>
	) {}

	getById(_id: MSchema.Types.ObjectId) {
		return this.workdayModel.findById(_id).exec();
	}

	create(payload: CreateWorkdayInput) {
		const newWorkday = new this.workdayModel(payload);
		return newWorkday.save();
	}

	update(payload: UpdateWorkdayInput) {
		return this.workdayModel
			.findByIdAndUpdate(payload._id, payload, { new: true })
			.exec();
	}

	delete(_id: MSchema.Types.ObjectId) {
		return this.workdayModel.findByIdAndDelete(_id).exec();
	}
}
