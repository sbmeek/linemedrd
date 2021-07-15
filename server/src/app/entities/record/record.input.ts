import { Schema as MSchema } from 'mongoose';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateRecordInput {
	@Field(() => String, { nullable: true })
	actualDoc?: MSchema.Types.ObjectId;

	@Field(() => String)
	patientId: MSchema.Types.ObjectId;

	@Field(() => [String])
	content?: MSchema.Types.ObjectId[];
}

@InputType()
export class UpdateRecordInput {
	@Field(() => String)
	_id: MSchema.Types.ObjectId;

	@Field(() => String, { nullable: true })
	actualDoc?: MSchema.Types.ObjectId;

	@Field(() => String, { nullable: true })
	patientId?: MSchema.Types.ObjectId;

	@Field(() => [String], { nullable: true })
	content?: MSchema.Types.ObjectId[];
}

@InputType()
export class ListRecordInput {
	@Field(() => String, { nullable: true })
	_id: MSchema.Types.ObjectId;

	@Field(() => String, { nullable: true })
	actualDoc?: MSchema.Types.ObjectId;

	@Field(() => String, { nullable: true })
	patientId?: MSchema.Types.ObjectId;

	@Field(() => [String], { nullable: true })
	content?: MSchema.Types.ObjectId[];
}
