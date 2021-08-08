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
import { Public } from 'app/lib/decorators/public.decorator';
import { Patient, PatientDocument } from './patient.model';
import {
	CreatePatientInput,
	UpdatePatientInput,
	ListPatientInput
} from './patient.input';
import { PatientService } from './patient.service';
import { User } from '../user/user.model';

@Resolver(() => Patient)
export class PatientResolver {
	constructor(private patientService: PatientService) {}

	@Query(() => Patient)
	@Public()
	async patient(
		@Args('_id', { type: () => String }) _id: MSchema.Types.ObjectId
	) {
		return this.patientService.getById(_id);
	}

	@Query(() => [Patient])
	@Public()
	async patients(
		@Args('filters', { nullable: true }) filters?: ListPatientInput
	) {
		return this.patientService.list(filters);
	}

	@Mutation(() => Patient)
	@UseGuards(GqlAuthGuard, RolesGuard)
	@RequiredRole(Roles.PATIENT, Roles.ADMIN)
	async createPatient(@Args('payload') payload: CreatePatientInput) {
		return this.patientService.create(payload);
	}

	@Mutation(() => Patient)
	@UseGuards(GqlAuthGuard, RolesGuard)
	@RequiredRole(Roles.PATIENT, Roles.ADMIN)
	async updatePatient(@Args('payload') payload: UpdatePatientInput) {
		return this.patientService.update(payload);
	}

	@Mutation(() => Patient)
	@UseGuards(GqlAuthGuard, RolesGuard)
	@RequiredRole(Roles.ADMIN)
	async deletePatient(
		@Args('_id', { type: () => String }) _id: MSchema.Types.ObjectId
	) {
		return this.patientService.delete(_id);
	}

	@ResolveField(() => User)
	async user(
		@Parent() patient: PatientDocument,
		@Args('populate') populate: boolean
	) {
		if (populate)
			await patient
				.populate({
					path: 'userId',
					model: User.name
				})
				.execPopulate();
		return patient.userId;
	}
}
