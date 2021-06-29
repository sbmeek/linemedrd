import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { UserAdress, UserAdressSchema } from "./user-adress.model";
import { UserAdressService } from './user-adress.service';
import { UserAdressResolver } from './user-adress.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserAdress.name, schema: UserAdressSchema },
    ]),
  ],
  providers: [UserAdressService, UserAdressResolver],
})
export class UserAdressModule {}
