import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MSchema } from 'mongoose';

import { Report, ReportDocument } from './report.model';
import {
	CreateReportInput,
	UpdateReportInput,
	ListReportInput
} from './report.input';

@Injectable()
export class ReportService {
	constructor(
		@InjectModel(Report.name)
		private reportModel: Model<ReportDocument>
	) {}

	getById(_id: MSchema.Types.ObjectId) {
		return this.reportModel.findById(_id).exec();
	}

	list(filters: ListReportInput) {
		return this.reportModel.find({ ...filters }).exec();
	}

	async create(payload: CreateReportInput) {
		const newReport = new this.reportModel(payload);
		return newReport.save();
	}

	async update(payload: UpdateReportInput) {
		return this.reportModel
			.findByIdAndUpdate(payload._id, payload, { new: true })
			.exec();
	}

	async delete(_id: MSchema.Types.ObjectId) {
		return this.reportModel.findByIdAndDelete(_id).exec();
	}
}
