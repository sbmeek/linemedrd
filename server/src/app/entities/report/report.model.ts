import { Document, Schema as MSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

import { Doctor } from '../doctor/doctor.model';
import { Patient } from '../patient/patient.model';

@ObjectType()
@Schema({ timestamps: true })
export class Report {
	@Field(() => String)
	_id: MSchema.Types.ObjectId;

	@Field(() => Doctor)
	@Prop({ required: true, type: MSchema.Types.ObjectId, ref: Doctor.name })
	doctorId: MSchema.Types.ObjectId | Doctor;

	@Field(() => Patient)
	@Prop({ required: true, type: MSchema.Types.ObjectId, ref: Patient.name })
	patientId: MSchema.Types.ObjectId | Patient;

	@Field(() => Date)
	@Prop({ default: new Date() })
	emissionDate?: Date;

	@Field(() => Boolean)
	@Prop({ default: true })
	isActive?: boolean;

	@Field(() => String)
	@Prop({ required: true })
	reason?: string;
}

export type ReportDocument = Report & Document;
export const ReportSchema = SchemaFactory.createForClass(Report);
