import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MSchema } from 'mongoose';

import { Agenda, AgendaDocument } from './agenda.model';
import {
	CreateAgendaInput,
	ListAgendaInput,
	UpdateAgendaInput
} from './agenda.input';

@Injectable()
export class AgendaService {
	constructor(
		@InjectModel(Agenda.name)
		private agendaModel: Model<AgendaDocument>
	) {}

	getById(_id: MSchema.Types.ObjectId) {
		return this.agendaModel.findById(_id).exec();
	}

	list(filters: ListAgendaInput) {
		return this.agendaModel.find({ ...filters }).exec();
	}

	create(payload: CreateAgendaInput) {
		const newAgenda = new this.agendaModel(payload);
		return newAgenda.save();
	}

	update(payload: UpdateAgendaInput) {
		return this.agendaModel
			.findByIdAndUpdate(payload._id, payload, { new: true })
			.exec();
	}

	delete(_id: MSchema.Types.ObjectId) {
		return this.agendaModel.findByIdAndDelete(_id).exec();
	}
}
