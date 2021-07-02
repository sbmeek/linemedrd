import {
	Args,
	Mutation,
	Parent,
	Query,
	ResolveField,
	Resolver
} from '@nestjs/graphql';
import { Schema as MSchema } from 'mongoose';

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
	async patient(
		@Args('_id', { type: () => String }) _id: MSchema.Types.ObjectId
	) {
		return this.patientService.getById(_id);
	}

	@Query(() => [Patient])
	async patients(
		@Args('filters', { nullable: true }) filters?: ListPatientInput
	) {
		return this.patientService.list(filters);
	}

	@Mutation(() => Patient)
	async createPatient(@Args('payload') payload: CreatePatientInput) {
		return this.patientService.create(payload);
	}

	@Mutation(() => Patient)
	async updatePatient(@Args('payload') payload: UpdatePatientInput) {
		return this.patientService.update(payload);
	}

	@Mutation(() => Patient)
	async deletePatient(
		@Args('_id', { type: () => String }) _id: MSchema.Types.ObjectId
	) {
		return this.patientService.delete(_id);
	}

	@ResolveField(() => User)
	async user_id(
		@Parent() patient: PatientDocument,
		@Args('populate') populate: boolean
	) {
		if (populate)
			await patient
				.populate({
					path: 'UserId',
					model: User.name
				})
				.execPopulate();
		return patient.UserId;
	}
}
