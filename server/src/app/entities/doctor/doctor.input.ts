import { Schema as MSchema } from 'mongoose';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateDoctorInput {
	@Field(() => String)
	userId: MSchema.Types.ObjectId;

	@Field(() => [String])
	specialities: MSchema.Types.ObjectId[];

	@Field(() => [String])
	workday: MSchema.Types.ObjectId[];

	@Field(() => Number, { nullable: true })
	patienLimit?: number;

	@Field(() => [String], { nullable: true })
	ars?: string[];

	@Field(() => String)
	description: string;

	@Field(() => [String], { nullable: true })
	imageUrl?: string[];

	@Field(() => Number, { nullable: true, defaultValue: 0 })
	ratingTotal?: number;

	@Field(() => String)
	exequatur: string;

	@Field(() => String)
	organization: string;
}

@InputType()
export class UpdateDoctorInput {
	@Field(() => String, { nullable: true })
	_id: MSchema.Types.ObjectId;

	@Field(() => [String], { nullable: true })
	specialities?: MSchema.Types.ObjectId[];

	@Field(() => [String], { nullable: true })
	workday?: MSchema.Types.ObjectId[];

	@Field(() => Number, { nullable: true })
	patienLimit?: number;

	@Field(() => [String], { nullable: true })
	ars?: string[];

	@Field(() => String, { nullable: true })
	description?: string;

	@Field(() => [String], { nullable: true })
	imageUrl?: string[];

	@Field(() => Number, { nullable: true })
	ratingTotal?: number;

	@Field(() => String, { nullable: true })
	organization?: string;
}

@InputType()
export class ListDoctorInput {
	@Field(() => String, { nullable: true })
	_id?: MSchema.Types.ObjectId;

	@Field(() => String, { nullable: true })
	userId?: MSchema.Types.ObjectId;

	@Field(() => [String], { nullable: true })
	specialities?: MSchema.Types.ObjectId[];

	@Field(() => [String], { nullable: true })
	workday?: MSchema.Types.ObjectId[];

	@Field(() => Number, { nullable: true })
	patienLimit?: number;

	@Field(() => [String], { nullable: true })
	ars?: string[];

	@Field(() => String, { nullable: true })
	description?: string;

	@Field(() => [String], { nullable: true })
	imageUrl?: string[];

	@Field(() => Number, { nullable: true })
	ratingTotal?: number;

	@Field(() => String, { nullable: true })
	organization?: string;
}
