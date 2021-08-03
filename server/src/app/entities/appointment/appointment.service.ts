import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MSchema } from 'mongoose';

import { Appointment, AppointmentDocument } from './appointment.model';
import {
	CreateAppointmentInput,
	UpdateAppointmentInput,
	ListAppointmentInput
} from './appointment.input';

@Injectable()
export class AppointmentService {
	constructor(
		@InjectModel(Appointment.name)
		private appointmentModel: Model<AppointmentDocument>
	) {}

	getById(_id: MSchema.Types.ObjectId) {
		return this.appointmentModel.findById(_id).exec();
	}

	list(filters: ListAppointmentInput) {
		return this.appointmentModel.find({ ...filters }).exec();
	}

	async create(payload: CreateAppointmentInput) {
		const newApmt = new this.appointmentModel(payload);
		newApmt.state = newApmt.setState(payload.state);
		const savedApmt = await newApmt.save();
		return savedApmt;
	}

	update(payload: UpdateAppointmentInput) {
		return this.appointmentModel
			.findByIdAndUpdate(payload._id, payload, { new: true })
			.exec();
	}

	delete(_id: MSchema.Types.ObjectId) {
		return this.appointmentModel.findByIdAndDelete(_id).exec();
	}
}
