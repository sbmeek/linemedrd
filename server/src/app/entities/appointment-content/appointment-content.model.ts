import { Document, Schema as MSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

import { Specialties } from '../specialties/specialties.model';

@ObjectType()
@Schema({ timestamps: true })
export class AppointmentContent {
	@Field(() => String)
	_id: MSchema.Types.ObjectId;

	@Field(() => String)
	@Prop({ required: true })
	diagnostic?: string;

	@Field(() => [String])
	@Prop({ type: [String] })
	comments?: string[];

	@Field(() => [String])
	@Prop({ type: [String] })
	attachments?: string[];

	@Field(() => String)
	@Prop({ required: true })
	reason?: string;

	@Field(() => Specialties)
	@Prop({
		required: true,
		type: MSchema.Types.ObjectId,
		ref: Specialties.name
	})
	specialtyId: MSchema.Types.ObjectId | Specialties;

	@Field(() => Date)
	@Prop()
	appointmentDate?: Date;
}

export type ApmtContentDocument = AppointmentContent & Document;
export const ApmtContentSchema =
	SchemaFactory.createForClass(AppointmentContent);
