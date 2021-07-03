import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Schema as MSchema } from 'mongoose';

import { Specialties } from './specialties.model';
import {
	CreateSpecialtiesInput,
	UpdateSpecialtiesInput
} from './specialties.input';
import { SpecialtiesService } from './specialties.service';

@Resolver(() => Specialties)
export class SpecialtiesResolver {
	constructor(private specialtyService: SpecialtiesService) {}

	@Query(() => Specialties)
	specialty(@Args('_id', { type: () => String }) _id: MSchema.Types.ObjectId) {
		return this.specialtyService.getById(_id);
	}

	@Query(() => [Specialties])
	specialties() {
		return this.specialtyService.list();
	}

	@Mutation(() => Specialties)
	createSpecialty(@Args('payload') payload: CreateSpecialtiesInput) {
		return this.specialtyService.create(payload);
	}

	@Mutation(() => Specialties)
	updateSpecialty(@Args('payload') payload: UpdateSpecialtiesInput) {
		return this.specialtyService.update(payload);
	}

	@Mutation(() => Specialties)
	deleteSpecialty(
		@Args('_id', { type: () => String }) _id: MSchema.Types.ObjectId
	) {
		return this.specialtyService.delete(_id);
	}
}
