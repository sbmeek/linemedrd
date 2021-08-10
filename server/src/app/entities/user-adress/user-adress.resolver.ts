import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Schema as MSchema } from 'mongoose';
import { UseGuards } from '@nestjs/common';

import { Roles } from 'app/lib/types';
import { GqlAuthGuard } from 'app/auth/guard/gql-auth.guard';
import { RolesGuard } from 'app/auth/guard/roles.guard';
import { RequiredRole } from 'app/lib/decorators/roles.decorator';
import { Public } from 'app/lib/decorators/public.decorator';
import { UserAdress } from './user-adress.model';
import { UserAdressService } from './user-adress.service';
import { CreateAdressInput, UpdateAdressInput } from './user-adress.input';

@Resolver(() => UserAdress)
export class UserAdressResolver {
	constructor(private adressService: UserAdressService) {}

	@Query(() => UserAdress)
	@UseGuards(GqlAuthGuard)
	async adress(
		@Args('_id', { type: () => String }) _id: MSchema.Types.ObjectId
	) {
		return this.adressService.getById(_id);
	}

	@Mutation(() => UserAdress)
	@Public()
	async createAdress(@Args('payload') payload: CreateAdressInput) {
		return this.adressService.create(payload);
	}

	@Mutation(() => UserAdress)
	@UseGuards(GqlAuthGuard)
	async updateAdress(@Args('payload') payload: UpdateAdressInput) {
		return this.adressService.update(payload);
	}

	@Mutation(() => UserAdress)
	@UseGuards(GqlAuthGuard, RolesGuard)
	@RequiredRole(Roles.ADMIN)
	async deleteAdress(
		@Args('_id', { type: () => String }) _id: MSchema.Types.ObjectId
	) {
		return this.adressService.delete(_id);
	}
}
