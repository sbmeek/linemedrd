import { Schema as MSchema } from 'mongoose';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdatePatientInput {
	@Field(() => String)
	_id: MSchema.Types.ObjectId;
}
