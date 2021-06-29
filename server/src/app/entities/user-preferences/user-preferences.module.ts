import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { UserPrefencesSchema, UserPreferences } from "./user-preferences.model";
import { UserPreferencesService } from "./user-preferences.service";
import { UserPreferencesResolver } from "./user-preferences.resolver";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserPreferences.name, schema: UserPrefencesSchema },
    ]),
  ],
  providers: [UserPreferencesService, UserPreferencesResolver],
})
export class UserPreferencesModule {}
