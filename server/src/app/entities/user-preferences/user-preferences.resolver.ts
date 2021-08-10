import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Schema as MSchema } from 'mongoose';
import { UseGuards } from '@nestjs/common';

import { Roles } from 'app/lib/types';
import { GqlAuthGuard } from 'app/auth/guard/gql-auth.guard';
import { RolesGuard } from 'app/auth/guard/roles.guard';
import { RequiredRole } from 'app/lib/decorators/roles.decorator';
import { Public } from 'app/lib/decorators/public.decorator';
import { UserPreferences } from './user-preferences.model';
import { CreatePrefInput, UpdatePrefInput } from './user-preferences.input';
import { UserPreferencesService } from './user-preferences.service';

@Resolver(() => UserPreferences)
export class UserPreferencesResolver {
	constructor(private prefService: UserPreferencesService) {}

	@Query(() => UserPreferences)
	@UseGuards(GqlAuthGuard)
	async pref(@Args('_id', { type: () => String }) _id: MSchema.Types.ObjectId) {
		return this.prefService.getById(_id);
	}

	@Mutation(() => UserPreferences)
	@Public()
	async createPref(@Args('payload') payload: CreatePrefInput) {
		return this.prefService.create(payload);
	}

	@Mutation(() => UserPreferences)
	@UseGuards(GqlAuthGuard)
	async updatePref(@Args('payload') payload: UpdatePrefInput) {
		return this.prefService.update(payload);
	}

	@Mutation(() => UserPreferences)
	@UseGuards(GqlAuthGuard, RolesGuard)
	@RequiredRole(Roles.ADMIN)
	async deletePref(
		@Args('_id', { type: () => String }) _id: MSchema.Types.ObjectId
	) {
		return this.prefService.delete(_id);
	}
}
