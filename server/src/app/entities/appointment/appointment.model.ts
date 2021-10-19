import { Document, Schema as MSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

import { Patient } from '../patient/patient.model';
import { Doctor } from '../doctor/doctor.model';
import { AppointmentContent } from '../appointment-content/appointment-content.model';
import { States } from 'app/lib/types';

@ObjectType()
@Schema({ timestamps: true })
export class Appointment {
	@Field(() => String)
	_id: MSchema.Types.ObjectId;

	@Field(() => Patient)
	@Prop({ required: true, type: MSchema.Types.ObjectId, ref: Patient.name })
	patientId: MSchema.Types.ObjectId | Patient;

	@Field(() => Doctor)
	@Prop({ required: true, type: MSchema.Types.ObjectId, ref: Doctor.name })
	doctorId: MSchema.Types.ObjectId | Doctor;

	@Field(() => Date)
	@Prop({ default: new Date() })
	issueDate?: Date;

	@Field(() => String)
	@Prop({ type: String, default: States.PENDING })
	state?: States | number;

	@Field(() => Number)
	@Prop()
	sequence?: number;

	@Field(() => AppointmentContent)
	@Prop({ type: MSchema.Types.ObjectId, ref: AppointmentContent.name })
	content?: MSchema.Types.ObjectId | AppointmentContent;

	@Field(() => Boolean)
	@Prop({ default: false })
	usesArs?: boolean;

	@Field(() => String)
	@Prop()
	patientComment?: string;

	@Field(() => Number)
	@Prop()
	rating?: number;

	setState: (n: number) => States;
}

export type AppointmentDocument = Appointment & Document;
export const AppointmentSchema = SchemaFactory.createForClass(Appointment);

AppointmentSchema.methods.setState = function (n: number): States {
	switch (n) {
		case 0:
			return States.PENDING;
		case 1:
			return States.ACCEPTED;
		case 2:
			return States.DECLINED;
		case 3:
			return States.SUSPENDED;
		case 4:
			return States.ARCHIVED;
		default:
			return States.PENDING;
	}
};
