import { Document, Schema as MSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

import { User } from '../user/user.model';

@ObjectType()
@Schema({ timestamps: true })
export class Patient {
	@Field(() => String)
	_id: MSchema.Types.ObjectId;

	@Field(() => User)
	@Prop({ required: true, type: MSchema.Types.ObjectId, ref: User.name })
	UserId: MSchema.Types.ObjectId | User;

	@Field(() => [String])
	@Prop({ type: [String], nullable: true })
	diseases?: string[];

	@Field(() => [String])
	@Prop({ type: [String], nullable: true })
	allergies?: string[];
}

export type PatientDocument = Patient & Document;
export const PatientSchema = SchemaFactory.createForClass(Patient);
