import { Schema as MSchema } from 'mongoose';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePatientInput {
	@Field(() => String)
	userId: MSchema.Types.ObjectId;

	@Field(() => [String], { nullable: true })
	diseases?: string[];

	@Field(() => [String], { nullable: true })
	allergies?: string[];
}

@InputType()
export class UpdatePatientInput {
	@Field(() => String)
	_id: MSchema.Types.ObjectId;

	@Field(() => String, { nullable: true })
	userId?: MSchema.Types.ObjectId;

	@Field(() => [String], { nullable: true })
	diseases?: string[];

	@Field(() => [String], { nullable: true })
	allergies?: string[];
}

@InputType()
export class ListPatientInput {
	@Field(() => String, { nullable: true })
	_id?: MSchema.Types.ObjectId;

	@Field(() => String, { nullable: true })
	userId?: MSchema.Types.ObjectId;

	@Field(() => [String], { nullable: true })
	diseases?: string[];

	@Field(() => [String], { nullable: true })
	allergies?: string[];
}
