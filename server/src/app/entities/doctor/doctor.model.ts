import { Document, Schema as MSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

import { User } from '../user/user.model';
import { Specialties } from '../specialties/specialties.model';
import { Workday } from '../workday/workday.model';

@ObjectType()
@Schema({ timestamps: true })
export class Doctor {
	@Field(() => String)
	_id: MSchema.Types.ObjectId;

	@Field(() => User)
	@Prop({ required: true, type: MSchema.Types.ObjectId, ref: User.name })
	userId: MSchema.Types.ObjectId | User;

	@Field(() => [Specialties])
	@Prop({
		required: true,
		type: [MSchema.Types.ObjectId],
		ref: Specialties.name
	})
	specialties?: MSchema.Types.ObjectId[] | Specialties[];

	@Field(() => [Workday])
	@Prop({ required: true, type: [MSchema.Types.ObjectId], ref: Workday.name })
	workday?: MSchema.Types.ObjectId[] | Workday[];

	@Field(() => Number)
	@Prop({ default: 0 })
	patientLimit?: number;

	@Field(() => [String])
	@Prop({ type: [String] })
	ars?: string[];

	@Field(() => String)
	@Prop({ required: true })
	description?: string;

	@Field(() => [String])
	@Prop({ type: [String] })
	imageUrl?: string[];

	@Field(() => Number)
	@Prop({ default: 0 })
	ratingTotal?: number;

	@Field(() => String)
	@Prop({ required: true })
	exequatur?: string;

	@Field(() => String)
	@Prop({ required: true })
	organization?: string;
}

export type DoctorDocument = Doctor & Document;
export const DoctorSchema = SchemaFactory.createForClass(Doctor);
