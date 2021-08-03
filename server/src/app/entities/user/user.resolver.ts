import {
	Args,
	Mutation,
	Parent,
	Query,
	ResolveField,
	Resolver
} from '@nestjs/graphql';
import { Schema as MSchema } from 'mongoose';
import { UnauthorizedException, UseGuards } from '@nestjs/common';

import { Roles } from 'app/lib/enums';
import { User, UserDocument } from './user.model';
import { CreateUserInput, UpdateUserInput, ListUserInput } from './user.input';
import { UserService } from './user.service';
import { UserAdress } from '../user-adress/user-adress.model';
import { UserPreferences } from '../user-preferences/user-preferences.model';
import { GqlAuthGuard } from 'app/auth/guard/gql-auth.guard';
import { RolesGuard } from 'app/auth/guard/roles.guard';
import { CurrentUser } from 'app/lib/decorators/currentUser.decorator';
import { RequiredRole } from 'app/lib/decorators/roles.decorator';

const isAdmin = (user: User): boolean => {
	if (user.role === Roles.ADMIN) return true;
	else return false;
};

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
	async users(
		@CurrentUser() user: User,
		@Args('filters', { nullable: true }) filters?: ListUserInput
	) {
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
	async updateUser(
		@CurrentUser() user: User,
		@Args('payload') payload: UpdateUserInput
	) {
		const isUpdatingRole = payload.role !== null || payload.role !== undefined;
		const isNotAdmin = !isAdmin(user);
		if (isUpdatingRole && isNotAdmin) return new UnauthorizedException();
		else return this.userService.update(payload);
	}

	@Mutation(() => User)
	@UseGuards(GqlAuthGuard)
	async deleteUser(
		@CurrentUser() user: User,
		@Args('_id', { type: () => String }) _id: MSchema.Types.ObjectId
	) {
		if (isAdmin(user)) return this.userService.delete(_id);
		else return new UnauthorizedException();
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
