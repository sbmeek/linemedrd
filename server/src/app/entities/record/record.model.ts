import { Document, Schema as MSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

import { Doctor } from '../doctor/doctor.model';
import { Patient } from '../patient/patient.model';
import { AppointmentContent } from '../appointment-content/appointment-content.model';

@ObjectType()
@Schema({ timestamps: true })
export class Record {
	@Field(() => String)
	_id: MSchema.Types.ObjectId;

	@Field(() => Doctor)
	@Prop({ type: MSchema.Types.ObjectId, ref: Doctor.name })
	actualDoc: MSchema.Types.ObjectId | Doctor;

	@Field(() => Patient)
	@Prop({ required: true, type: MSchema.Types.ObjectId, ref: Patient.name })
	patientId: MSchema.Types.ObjectId | Patient;

	@Field(() => [AppointmentContent])
	@Prop({ type: [MSchema.Types.ObjectId], ref: AppointmentContent.name })
	content?: MSchema.Types.ObjectId[] | AppointmentContent[];
}

export type RecordDocument = Record & Document;
export const RecordSchema = SchemaFactory.createForClass(Record);
