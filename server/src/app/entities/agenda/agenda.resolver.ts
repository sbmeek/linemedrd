import {
	Args,
	Mutation,
	Parent,
	Query,
	ResolveField,
	Resolver
} from '@nestjs/graphql';
import { Schema as MSchema } from 'mongoose';
import { UseGuards } from '@nestjs/common';

import { Roles } from 'app/lib/enums';
import { GqlAuthGuard } from 'app/auth/guard/gql-auth.guard';
import { RolesGuard } from 'app/auth/guard/roles.guard';
import { RequiredRole } from 'app/lib/decorators/roles.decorator';
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
	@UseGuards(GqlAuthGuard, RolesGuard)
	@RequiredRole(Roles.DOCTOR, Roles.ADMIN)
	async agenda(
		@Args('_id', { type: () => String }) _id: MSchema.Types.ObjectId
	) {
		return this.agendaService.getById(_id);
	}

	@Query(() => [Agenda])
	@UseGuards(GqlAuthGuard, RolesGuard)
	@RequiredRole(Roles.DOCTOR, Roles.ADMIN)
	async agendas(@Args('filters', { nullable: true }) filters: ListAgendaInput) {
		return this.agendaService.list(filters);
	}

	@Mutation(() => Agenda)
	@UseGuards(GqlAuthGuard, RolesGuard)
	@RequiredRole(Roles.DOCTOR, Roles.ADMIN)
	async createAgenda(@Args('payload') payload: CreateAgendaInput) {
		return this.agendaService.create(payload);
	}

	@Mutation(() => Agenda)
	@UseGuards(GqlAuthGuard, RolesGuard)
	@RequiredRole(Roles.DOCTOR, Roles.ADMIN)
	async updateAgenda(@Args('payload') payload: UpdateAgendaInput) {
		return this.agendaService.update(payload);
	}

	@Mutation(() => Agenda)
	@UseGuards(GqlAuthGuard, RolesGuard)
	@RequiredRole(Roles.ADMIN)
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
