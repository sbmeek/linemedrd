import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MSchema } from 'mongoose';

import { Patient, PatientDocument } from './patient.model';
import {
	CreatePatientInput,
	UpdatePatientInput,
	ListPatientInput
} from './patient.input';

@Injectable()
export class PatientService {
	constructor(
		@InjectModel(Patient.name)
		private patientModel: Model<PatientDocument>
	) {}

	getById(_id: MSchema.Types.ObjectId) {
		return this.patientModel.findById(_id).exec();
	}

	list(filters: ListPatientInput) {
		return this.patientModel.find({ ...filters }).exec();
	}

	create(payload: CreatePatientInput) {
		const newPatient = new this.patientModel(payload);
		return newPatient.save();
	}

	update(payload: UpdatePatientInput) {
		return this.patientModel
			.findByIdAndUpdate(payload._id, payload, { new: true })
			.exec();
	}

	delete(_id: MSchema.Types.ObjectId) {
		return this.patientModel.findByIdAndDelete(_id).exec();
	}
}
