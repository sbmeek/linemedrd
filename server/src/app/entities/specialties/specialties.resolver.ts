import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Schema as MSchema } from 'mongoose';
import { UseGuards } from '@nestjs/common';

import { Roles } from 'app/lib/types';
import { GqlAuthGuard, RolesGuard } from 'app/auth/guard';
import { RequiredRole, Public } from 'app/lib/decorators';
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
	@Public()
	async specialty(
		@Args('_id', { type: () => String }) _id: MSchema.Types.ObjectId
	) {
		return this.specialtyService.getById(_id);
	}

	@Query(() => [Specialties])
	@Public()
	async specialties(@Args('des', { nullable: true }) des: string) {
		return this.specialtyService.list(des);
	}

	@Mutation(() => Specialties)
	@UseGuards(GqlAuthGuard, RolesGuard)
	@RequiredRole(Roles.ADMIN)
	async createSpecialty(@Args('payload') payload: CreateSpecialtiesInput) {
		return this.specialtyService.create(payload);
	}

	@Mutation(() => Specialties)
	@UseGuards(GqlAuthGuard, RolesGuard)
	@RequiredRole(Roles.ADMIN)
	async updateSpecialty(@Args('payload') payload: UpdateSpecialtiesInput) {
		return this.specialtyService.update(payload);
	}

	@Mutation(() => Specialties)
	@UseGuards(GqlAuthGuard, RolesGuard)
	@RequiredRole(Roles.ADMIN)
	async deleteSpecialty(
		@Args('_id', { type: () => String }) _id: MSchema.Types.ObjectId
	) {
		return this.specialtyService.delete(_id);
	}
}
