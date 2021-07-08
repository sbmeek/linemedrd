import { Schema as MSchema } from 'mongoose';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateReportInput {
	@Field(() => String)
	doctorId: MSchema.Types.ObjectId;

	@Field(() => String)
	patientId: MSchema.Types.ObjectId;

	@Field(() => Date, { defaultValue: new Date() })
	emissionDate?: Date;

	@Field(() => Boolean, { defaultValue: true })
	isActive?: boolean;

	@Field(() => String)
	reason?: string;
}

@InputType()
export class UpdateReportInput {
	@Field(() => String)
	_id: MSchema.Types.ObjectId;

	@Field(() => Boolean, { nullable: true })
	isActive?: boolean;

	@Field(() => String, { nullable: true })
	reason?: string;
}

@InputType()
export class ListReportInput {
	@Field(() => String, { nullable: true })
	_id?: MSchema.Types.ObjectId;

	@Field(() => String, { nullable: true })
	doctorId?: MSchema.Types.ObjectId;

	@Field(() => String, { nullable: true })
	patientId?: MSchema.Types.ObjectId;

	@Field(() => Date, { nullable: true })
	emissionDate?: Date;

	@Field(() => Boolean, { nullable: true })
	isActive?: boolean;

	@Field(() => String, { nullable: true })
	reason?: string;
}
