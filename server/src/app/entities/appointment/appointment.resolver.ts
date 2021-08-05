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
import { Appointment, AppointmentDocument } from './appointment.model';
import {
	CreateAppointmentInput,
	UpdateAppointmentInput,
	ListAppointmentInput
} from './appointment.input';
import { AppointmentService } from './appointment.service';
import { AppointmentContent } from '../appointment-content/appointment-content.model';

@Resolver(() => Appointment)
export class AppointmentResolver {
	constructor(private apmtService: AppointmentService) {}

	@Query(() => Appointment)
	@UseGuards(GqlAuthGuard, RolesGuard)
	@RequiredRole(Roles.PATIENT, Roles.ADMIN)
	async appointment(
		@Args('_id', { type: () => String }) _id: MSchema.Types.ObjectId
	) {
		return this.apmtService.getById(_id);
	}

	@Query(() => [Appointment])
	@UseGuards(GqlAuthGuard, RolesGuard)
	@RequiredRole(Roles.PATIENT, Roles.ADMIN)
	async appointments(
		@Args('filters', { nullable: true }) filters: ListAppointmentInput
	) {
		return this.apmtService.list(filters);
	}

	@Mutation(() => Appointment)
	@UseGuards(GqlAuthGuard, RolesGuard)
	@RequiredRole(Roles.PATIENT, Roles.ADMIN)
	async createAppointment(@Args('payload') payload: CreateAppointmentInput) {
		return this.apmtService.create(payload);
	}

	@Mutation(() => Appointment)
	@UseGuards(GqlAuthGuard, RolesGuard)
	@RequiredRole(Roles.PATIENT, Roles.ADMIN)
	async updateAppointment(@Args('payload') payload: UpdateAppointmentInput) {
		return this.apmtService.update(payload);
	}

	@Mutation(() => Appointment)
	@UseGuards(GqlAuthGuard, RolesGuard)
	@RequiredRole(Roles.PATIENT, Roles.ADMIN)
	async deleteAppointment(
		@Args('_id', { type: () => String }) _id: MSchema.Types.ObjectId
	) {
		return this.apmtService.delete(_id);
	}

	@ResolveField(() => AppointmentContent)
	async content(
		@Parent() apmnt: AppointmentDocument,
		@Args('populate') populate: boolean
	) {
		if (populate)
			await apmnt
				.populate({
					path: 'content',
					model: AppointmentContent.name
				})
				.execPopulate();
		return apmnt.content;
	}
}
