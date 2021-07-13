import { Schema as MSchema } from 'mongoose';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAppointmentInput {
	@Field(() => String)
	patientId: MSchema.Types.ObjectId;

	@Field(() => String)
	doctorId: MSchema.Types.ObjectId;

	@Field(() => Date, { defaultValue: new Date(), nullable: true })
	issueDate?: Date;

	@Field(() => Number, { defaultValue: 0 })
	state?: number;

	@Field(() => Number, { nullable: true })
	sequence?: number;

	@Field(() => String, { nullable: true })
	content?: MSchema.Types.ObjectId;

	@Field(() => Boolean, { defaultValue: false, nullable: true })
	usesArs?: boolean;

	@Field(() => String, { nullable: true })
	patientComment?: string;

	@Field(() => Number, { nullable: true })
	rating?: number;
}

export class UpdateAppointmentInput {
	@Field(() => String)
	_id: MSchema.Types.ObjectId;

	@Field(() => Date, { nullable: true })
	issueDate?: Date;

	@Field(() => Number, { nullable: true })
	state?: number;

	@Field(() => Number, { nullable: true })
	sequence?: number;

	@Field(() => String, { nullable: true })
	content?: MSchema.Types.ObjectId;

	@Field(() => Boolean, { nullable: true })
	usesArs?: boolean;

	@Field(() => String, { nullable: true })
	patientComment?: string;

	@Field(() => Number, { nullable: true })
	rating?: number;
}

export class ListAppointmentInput {
	@Field(() => String, { nullable: true })
	_id?: MSchema.Types.ObjectId;

	@Field(() => String, { nullable: true })
	patientId: MSchema.Types.ObjectId;

	@Field(() => String, { nullable: true })
	doctorId: MSchema.Types.ObjectId;

	@Field(() => Date, { nullable: true })
	issueDate?: Date;

	@Field(() => Number, { nullable: true })
	state?: number;

	@Field(() => Number, { nullable: true })
	sequence?: number;

	@Field(() => String, { nullable: true })
	content?: MSchema.Types.ObjectId;

	@Field(() => Boolean, { nullable: true })
	usesArs?: boolean;

	@Field(() => String, { nullable: true })
	patientComment?: string;

	@Field(() => Number, { nullable: true })
	rating?: number;
}
