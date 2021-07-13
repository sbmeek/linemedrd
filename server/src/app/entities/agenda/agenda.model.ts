import { Document, Schema as MSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

import { Doctor } from '../doctor/doctor.model';
import { Appointment } from '../appointment/appointment.model';

@ObjectType()
@Schema({ timestamps: true })
export class Agenda {
	@Field(() => String)
	_id: MSchema.Types.ObjectId;

	@Field(() => Doctor)
	@Prop({ required: true, type: MSchema.Types.ObjectId, ref: Doctor.name })
	doctorId: MSchema.Types.ObjectId | Doctor;

	@Field(() => [Appointment])
	@Prop({ type: [MSchema.Types.ObjectId], ref: Appointment.name })
	appointments: MSchema.Types.ObjectId[] | Appointments[];
}

export type AgendaDocument = Agenda & Document;
export const AgendaSchema = SchemaFactory.createForClass(Agenda);
