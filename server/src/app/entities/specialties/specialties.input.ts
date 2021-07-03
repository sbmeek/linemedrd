import { Schema as MSchema } from 'mongoose';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateSpecialtiesInput {
	@Field(() => String)
	description: string;
}

@InputType()
export class UpdateSpecialtiesInput {
	@Field(() => String)
	_id: MSchema.Types.ObjectId;

	@Field(() => String, { nullable: true })
	description?: string;
}
