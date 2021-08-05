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
import { Doctor, DoctorDocument } from './doctor.model';
import {
	CreateDoctorInput,
	ListDoctorInput,
	UpdateDoctorInput
} from './doctor.input';
import { DoctorService } from './doctor.service';
import { User } from '../user/user.model';
import { Specialties } from '../specialties/specialties.model';
import { Workday } from '../workday/workday.model';

@Resolver(() => Doctor)
export class DoctorResolver {
	constructor(private drService: DoctorService) {}

	@Query(() => Doctor)
	@Public()
	async doctor(
		@Args('_id', { type: () => String }) _id: MSchema.Types.ObjectId
	) {
		return this.drService.getById(_id);
	}

	@Query(() => [Doctor])
	@Public()
	async doctors(
		@Args('filters', { nullable: true }) filters?: ListDoctorInput
	) {
		return this.drService.list(filters);
	}

	@Mutation(() => Doctor)
	@UseGuards(GqlAuthGuard, RolesGuard)
	@RequiredRole(Roles.DOCTOR, Roles.ADMIN)
	async createDr(@Args('payload') payload: CreateDoctorInput) {
		return this.drService.create(payload);
	}

	@Mutation(() => Doctor)
	@UseGuards(GqlAuthGuard, RolesGuard)
	@RequiredRole(Roles.DOCTOR, Roles.ADMIN)
	async updateDr(@Args('payload') payload: UpdateDoctorInput) {
		return this.drService.update(payload);
	}

	@Mutation(() => Doctor)
	@UseGuards(GqlAuthGuard, RolesGuard)
	@RequiredRole(Roles.DOCTOR, Roles.ADMIN)
	async deleteDr(
		@Args('_id', { type: () => String }) _id: MSchema.Types.ObjectId
	) {
		return this.drService.delete(_id);
	}

	@ResolveField(() => User)
	async user(
		@Parent() dr: DoctorDocument,
		@Args('populate') populate: boolean
	) {
		if (populate)
			await dr
				.populate({
					path: 'userId',
					model: User.name
				})
				.execPopulate();
		return dr.userId;
	}

	@ResolveField(() => Specialties)
	async specialties(
		@Parent() dr: DoctorDocument,
		@Args('populate') populate: boolean
	) {
		if (populate)
			await dr
				.populate({
					path: 'specialties',
					model: Specialties.name
				})
				.execPopulate();
		return dr.specialties;
	}

	@ResolveField(() => Workday)
	async workday(
		@Parent() dr: DoctorDocument,
		@Args('populate') populate: boolean
	) {
		if (populate)
			await dr
				.populate({
					path: 'workday',
					model: Workday.name
				})
				.execPopulate();
		return dr.workday;
	}
}
