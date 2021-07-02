import { Document, Schema as MSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Schema()
export class UserPreferences {
	@Field(() => String)
	_id: MSchema.Types.ObjectId;

	@Field(() => Boolean)
	@Prop({ default: false })
	isEmailPublic?: boolean;

	@Field(() => Boolean)
	@Prop({ default: false })
	isHomeNumberPublic?: boolean;

	@Field(() => Boolean)
	@Prop({ default: false })
	isPhoneNumberPublic?: boolean;

	@Field(() => Boolean)
	@Prop({ default: false })
	isUserAdressPublic?: boolean;
}

export type UserPreferencesDocument = UserPreferences & Document;
export const UserPrefencesSchema = SchemaFactory.createForClass(
	UserPreferences
);
