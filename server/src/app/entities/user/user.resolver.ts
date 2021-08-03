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
import { User, UserDocument } from './user.model';
import { CreateUserInput, UpdateUserInput, ListUserInput } from './user.input';
import { UserService } from './user.service';
import { UserAdress } from '../user-adress/user-adress.model';
import { UserPreferences } from '../user-preferences/user-preferences.model';
import { GqlAuthGuard } from 'app/auth/guard/gql-auth.guard';
import { RolesGuard } from 'app/auth/guard/roles.guard';
//import { CurrentUser } from 'app/lib/decorators/currentUser.decorator';
import { RequiredRole } from 'app/lib/decorators/roles.decorator';

@Resolver(() => User)
export class UserResolver {
	constructor(private userService: UserService) {}

	@Query(() => User)
	//@UseGuards(GqlAuthGuard)
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
	@UseGuards(GqlAuthGuard)
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
				.populate({ path: 'useradresses', model: UserAdress.name })
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
					path: 'userpreferences',
					model: UserPreferences.name
				})
				.execPopulate();
		return user.userPreferences;
	}
}
