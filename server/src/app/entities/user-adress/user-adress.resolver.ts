import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Schema as MSchema } from "mongoose";

import { UserAdress } from "./user-adress.model";
import { UserAdressService } from "./user-adress.service";
import {
  CreateAdressInput,
  ListAdressInput,
  UpdateAdressInput,
} from "./user-adress.input";

@Resolver(() => UserAdress)
export class UserAdressResolver {
  constructor(private adressService: UserAdressService) {}

  @Query(() => UserAdress)
  async adress(@Args("_id", { type: String }) _id: MSchema.Types.ObjectId) {
    return this.adressService.getById(_id);
  }

  @Query(() => [UserAdress])
  async adresses(
    @Args("filters", { nullable: true }) filters?: ListAdressInput
  ) {
    return this.adressService.list(filters);
  }

  @Mutation(() => UserAdress)
  async createAdress(@Args("payload") payload: CreateAdressInput) {
    return this.adressService.create(payload);
  }

  @Mutation(() => UserAdress)
  async updateAdress(@Args("payload") payload: UpdateAdressInput) {
    return this.adressService.update(payload);
  }

  @Mutation(() => UserAdress)
  async deleteAdress(
    @Args("_id", { type: () => String }) _id: MSchema.Types.ObjectId
  ) {
    return this.adressService.delete(_id);
  }
}
