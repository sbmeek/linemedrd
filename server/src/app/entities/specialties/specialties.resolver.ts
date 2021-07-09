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
	async specialty(
		@Args('_id', { type: () => String }) _id: MSchema.Types.ObjectId
	) {
		return this.specialtyService.getById(_id);
	}

	@Query(() => [Specialties])
	async specialties(@Args('des', { nullable: true }) des: string) {
		return this.specialtyService.list(des);
	}

	@Mutation(() => Specialties)
	async createSpecialty(@Args('payload') payload: CreateSpecialtiesInput) {
		return this.specialtyService.create(payload);
	}

	@Mutation(() => Specialties)
	async updateSpecialty(@Args('payload') payload: UpdateSpecialtiesInput) {
		return this.specialtyService.update(payload);
	}

	@Mutation(() => Specialties)
	async deleteSpecialty(
		@Args('_id', { type: () => String }) _id: MSchema.Types.ObjectId
	) {
		return this.specialtyService.delete(_id);
	}
}
