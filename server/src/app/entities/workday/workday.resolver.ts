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

import { Roles } from 'app/lib/types';
import { GqlAuthGuard } from 'app/auth/guard/gql-auth.guard';
import { RolesGuard } from 'app/auth/guard/roles.guard';
import { RequiredRole } from 'app/lib/decorators/roles.decorator';
import { Public } from 'app/lib/decorators/public.decorator';
import { Workday, WorkdayDocument } from './workday.model';
import { CreateWorkdayInput, UpdateWorkdayInput } from './workday.input';
import { WorkdayService } from './workday.service';
import { UserAdress } from '../user-adress/user-adress.model';
import { Days } from '../days/days.model';

@Resolver(() => Workday)
export class WorkdayResolver {
	constructor(private workdayService: WorkdayService) {}

	@Query(() => Workday)
	@Public()
	async workday(
		@Args('_id', { type: () => String }) _id: MSchema.Types.ObjectId
	) {
		return this.workdayService.getById(_id);
	}

	@Mutation(() => Workday)
	@UseGuards(GqlAuthGuard, RolesGuard)
	@RequiredRole(Roles.DOCTOR, Roles.ADMIN)
	async createWorkday(@Args('payload') payload: CreateWorkdayInput) {
		return this.workdayService.create(payload);
	}

	@Mutation(() => Workday)
	@UseGuards(GqlAuthGuard, RolesGuard)
	@RequiredRole(Roles.DOCTOR, Roles.ADMIN)
	async updateWorkday(@Args('payload') payload: UpdateWorkdayInput) {
		return this.workdayService.update(payload);
	}

	@Mutation(() => Workday)
	@UseGuards(GqlAuthGuard, RolesGuard)
	@RequiredRole(Roles.DOCTOR, Roles.ADMIN)
	async deleteWorkday(
		@Args('_id', { type: () => String }) _id: MSchema.Types.ObjectId
	) {
		return this.workdayService.delete(_id);
	}

	@ResolveField(() => UserAdress)
	async adress(
		@Parent() workday: WorkdayDocument,
		@Args('populate') populate: boolean
	) {
		console.log(UserAdress.name);
		if (populate)
			await workday
				.populate({
					path: 'adress',
					model: UserAdress.name
				})
				.execPopulate();
		return workday.adress;
	}

	@ResolveField(() => Days)
	async days(
		@Parent() workday: WorkdayDocument,
		@Args('populate') populate: boolean
	) {
		if (populate)
			await workday
				.populate({
					path: 'days',
					model: Days.name
				})
				.execPopulate();
		return workday.days;
	}
}
