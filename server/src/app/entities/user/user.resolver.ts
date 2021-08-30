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
import { GqlAuthGuard, RolesGuard } from 'app/auth/guard';
import { RequiredRole, Public } from 'app/lib/decorators';
import { User, UserDocument } from './user.model';
import { CreateUserInput, UpdateUserInput, ListUserInput } from './user.input';
import { UserService } from './user.service';
import { UserAdress } from '../user-adress/user-adress.model';
import { UserPreferences } from '../user-preferences/user-preferences.model';

@Resolver(() => User)
export class UserResolver {
	constructor(private userService: UserService) {}

	@Query(() => User)
	@UseGuards(GqlAuthGuard)
	async user(@Args('_id', { type: () => String }) _id: MSchema.Types.ObjectId) {
		return this.userService.getById(_id);
	}

	@Query(() => [User])
	@UseGuards(GqlAuthGuard, RolesGuard)
	@RequiredRole(Roles.ADMIN)
	async users(@Args('filters', { nullable: true }) filters?: ListUserInput) {
		return this.userService.list(filters);
	}

	@Mutation(() => User)
	@Public()
	async createUser(
		@Args('payload') payload: CreateUserInput,
		@Args('origin') origin: string
	) {
		return this.userService.create(payload, origin);
	}

	@Mutation(() => User)
	@UseGuards(GqlAuthGuard)
	async updateUser(@Args('payload') payload: UpdateUserInput) {
		return this.userService.update(payload);
	}

	@Mutation(() => User)
	@UseGuards(GqlAuthGuard, RolesGuard)
	@RequiredRole(Roles.ADMIN)
	async deleteUser(
		@Args('_id', { type: () => String }) _id: MSchema.Types.ObjectId
	) {
		return this.userService.delete(_id);
	}

	@ResolveField(() => UserAdress)
	async userAdress(
		@Parent() user: UserDocument,
		@Args('populate') populate: boolean
	) {
		if (populate)
			await user
				.populate({ path: 'userAdress', model: UserAdress.name })
				.execPopulate();
		return user.userAdress;
	}

	@ResolveField(() => UserPreferences)
	async userPreferences(
		@Parent() user: UserDocument,
		@Args('populate') populate: boolean
	) {
		if (populate)
			await user
				.populate({
					path: 'userPreferences',
					model: UserPreferences.name
				})
				.execPopulate();
		return user.userPreferences;
	}
}
