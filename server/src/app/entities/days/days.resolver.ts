import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Schema as MSchema } from 'mongoose';
import { UseGuards } from '@nestjs/common';

import { Roles } from 'app/lib/types';
import { GqlAuthGuard } from 'app/auth/guard/gql-auth.guard';
import { RolesGuard } from 'app/auth/guard/roles.guard';
import { RequiredRole } from 'app/lib/decorators/roles.decorator';
import { Days } from './days.model';
import { DaysService } from './days.service';
import { CreateDaysInput, UpdateDaysInput } from './days.input';

@Resolver(() => Days)
export class DaysResolver {
	constructor(private daysService: DaysService) {}

	@Query(() => Days)
	@UseGuards(GqlAuthGuard, RolesGuard)
	@RequiredRole(Roles.DOCTOR, Roles.ADMIN)
	days(@Args('_id', { type: () => String }) _id: MSchema.Types.ObjectId) {
		return this.daysService.getById(_id);
	}

	@Mutation(() => Days)
	@UseGuards(GqlAuthGuard, RolesGuard)
	@RequiredRole(Roles.DOCTOR, Roles.ADMIN)
	createDays(@Args('payload') payload: CreateDaysInput) {
		return this.daysService.create(payload);
	}

	@Mutation(() => Days)
	@UseGuards(GqlAuthGuard, RolesGuard)
	@RequiredRole(Roles.DOCTOR, Roles.ADMIN)
	updateDays(@Args('payload') payload: UpdateDaysInput) {
		return this.daysService.update(payload);
	}

	@Mutation(() => Days)
	@UseGuards(GqlAuthGuard, RolesGuard)
	@RequiredRole(Roles.DOCTOR, Roles.ADMIN)
	deleteDays(@Args('_id', { type: () => String }) _id: MSchema.Types.ObjectId) {
		return this.daysService.delete(_id);
	}
}
