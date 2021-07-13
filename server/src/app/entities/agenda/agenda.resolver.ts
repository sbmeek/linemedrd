import {
	Args,
	Mutation,
	Parent,
	Query,
	ResolveField,
	Resolver
} from '@nestjs/graphql';
import { Schema as MSchema } from 'mongoose';

import { Agenda, AgendaDocument } from './agenda.model';
import {
	CreateAgendaInput,
	ListAgendaInput,
	UpdateAgendaInput
} from './agenda.input';
import { AgendaService } from './agenda.service';
import { Doctor } from '../doctor/doctor.model';
import { Appointment } from '../appointment/appointment.model';

@Resolver(() => Agenda)
export class AgendaResolver {
	constructor(private agendaService: AgendaService) {}

	@Query(() => Agenda)
	async agenda(
		@Args('_id', { type: () => String }) _id: MSchema.Types.ObjectId
	) {
		return this.agendaService.getById(_id);
	}

	@Query(() => [Agenda])
	async agendas(@Args('filters', { nullable: true }) filters: ListAgendaInput) {
		return this.agendaService.list(filters);
	}

	@Mutation(() => Agenda)
	async createAgenda(@Args('payload') payload: CreateAgendaInput) {
		return this.agendaService.create(payload);
	}

	@Mutation(() => Agenda)
	async updateAgenda(@Args('payload') payload: UpdateAgendaInput) {
		return this.agendaService.update(payload);
	}

	@Mutation(() => Agenda)
	async deleteAgenda(
		@Args('_id', { type: () => String }) _id: MSchema.Types.ObjectId
	) {
		return this.agendaService.delete(_id);
	}

	@ResolveField(() => Doctor)
	async doctorId(
		@Parent() agenda: AgendaDocument,
		@Args('populate') populate: boolean
	) {
		if (populate)
			await agenda
				.populate({
					path: 'doctorId',
					model: Doctor.name
				})
				.execPopulate();
		return agenda.doctorId;
	}

	@ResolveField(() => [Appointment])
	async appointments(
		@Parent() agenda: AgendaDocument,
		@Args('populate') populate: boolean
	) {
		if (populate)
			await agenda
				.populate({
					path: 'appointments',
					model: Appointment.name
				})
				.execPopulate();
		return agenda.appointments;
	}
}
