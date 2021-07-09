import { Schema as MSchema } from 'mongoose';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateApmtContentInput {
	@Field(() => String)
	diagnostic?: string;

	@Field(() => [String])
	comments?: string[];

	@Field(() => [String], { nullable: true })
	attachments?: string[];

	@Field(() => String, { nullable: true })
	reason?: string;

	@Field(() => String)
	specialtyId?: MSchema.Types.ObjectId;

	@Field(() => Date)
	appointmentDate?: Date;
}

@InputType()
export class UpdateApmtContentInput {
	@Field(() => String)
	_id: MSchema.Types.ObjectId;

	@Field(() => String, { nullable: true })
	diagnostic?: string;

	@Field(() => [String], { nullable: true })
	comments?: string[];

	@Field(() => [String], { nullable: true })
	attachments?: string[];

	@Field(() => String, { nullable: true })
	reason?: string;
}

@InputType()
export class ListApmtContentInput {
	@Field(() => String, { nullable: true })
	_id: MSchema.Types.ObjectId;

	@Field(() => String, { nullable: true })
	diagnostic?: string;

	@Field(() => [String], { nullable: true })
	comments?: string[];

	@Field(() => [String], { nullable: true })
	attachments?: string[];

	@Field(() => String, { nullable: true })
	reason?: string;

	@Field(() => String, { nullable: true })
	specialtyId?: MSchema.Types.ObjectId;

	@Field(() => Date, { nullable: true })
	appointmentDate?: Date;
}
