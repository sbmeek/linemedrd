import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Schema as MSchema } from "mongoose";

import { UserPreferences } from "./user-preferences.model";
import { CreatePrefInput, UpdatePrefInput } from "./user-preferences.input";
import { UserPreferencesService } from "./user-preferences.service";

@Resolver()
export class UserPreferencesResolver {
  constructor(private prefService: UserPreferencesService) {}

  @Query(() => UserPreferences)
  async pref(@Args("_id", { type: () => String }) _id: MSchema.Types.ObjectId) {
    return this.prefService.getById(_id);
  }

  @Mutation(() => UserPreferences)
  async createPref(@Args("payload") payload: CreatePrefInput) {
    return this.prefService.create(payload);
  }

  @Mutation(() => UserPreferences)
  async updatePref(@Args("payload") payload: UpdatePrefInput) {
    return this.prefService.update(payload);
  }

  @Mutation(() => UserPreferences)
  async deletePref(
    @Args("_id", { type: () => String }) _id: MSchema.Types.ObjectId
  ) {
    return this.prefService.delete(_id);
  }
}
