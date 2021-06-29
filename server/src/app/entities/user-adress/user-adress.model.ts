import { Document, Schema as MSchema } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
@Schema()
export class UserAdress {
  @Field(() => String)
  _id: MSchema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  street?: string;

  @Field(() => String)
  @Prop()
  sector?: string;

  @Field(() => String)
  @Prop()
  city?: string;

  @Field(() => String)
  @Prop()
  province?: string;
}

export type UserAdressDocument = UserAdress & Document;
export const UserAdressSchema = SchemaFactory.createForClass(UserAdress);
