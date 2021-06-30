import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Schema as MSchema } from 'mongoose';

import { Days } from './days.model';
import { DaysService } from './days.service';
import { CreateDaysInput, UpdateDaysInput } from './days.input';

@Resolver(() => Days)
export class DaysResolver {
	constructor(private daysService: DaysService) {}

	@Query(() => Days)
	days(@Args('_id', { type: String }) _id: MSchema.Types.ObjectId) {
		return this.daysService.getById(_id);
	}

	@Mutation(() => Days)
	createDays(@Args('payload') payload: CreateDaysInput) {
		return this.daysService.create(payload);
	}

	@Mutation(() => Days)
	updateDays(@Args('payload') payload: UpdateDaysInput) {
		return this.daysService.update(payload);
	}

	@Mutation(() => Days)
	deleteDays(@Args('_id', { type: String }) _id: MSchema.Types.ObjectId) {
		return this.daysService.delete(_id);
	}
}
