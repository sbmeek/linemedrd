import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Schema as MSchema } from 'mongoose';

import { AppointmentContent } from './appointment-content.model';
import {
	CreateApmtContentInput,
	UpdateApmtContentInput,
	ListApmtContentInput
} from './appointment-content.input';
import { ApmtContentService } from './appointment-content.service';

@Resolver(() => AppointmentContent)
export class AppointmentContentResolver {
	constructor(private apmtContentService: ApmtContentService) {}

	@Query(() => AppointmentContent)
	async apmtContent(
		@Args('_id', { type: () => String }) _id: MSchema.Types.ObjectId
	) {
		return this.apmtContentService.getById(_id);
	}

	@Query(() => [AppointmentContent])
	async apmtContents(
		@Args('filters', { nullable: true }) filters: ListApmtContentInput
	) {
		return this.apmtContentService.list(filters);
	}

	@Mutation(() => AppointmentContent)
	async createApmtContent(@Args('payload') payload: CreateApmtContentInput) {
		return this.apmtContentService.create(payload);
	}

	@Mutation(() => AppointmentContent)
	async updateApmtContent(@Args('payload') payload: UpdateApmtContentInput) {
		return this.apmtContentService.update(payload);
	}

	@Mutation(() => AppointmentContent)
	async deleteApmtContent(
		@Args('_id', { type: () => String }) _id: MSchema.Types.ObjectId
	) {
		return this.apmtContentService.delete(_id);
	}
}
