import { Schema as MSchema } from 'mongoose';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAgendaInput {
	@Field(() => String)
	doctorId: MSchema.Types.ObjectId;

	@Field(() => [String])
	appointments: MSchema.Types.ObjectId[];
}

@InputType()
export class UpdateAgendaInput {
	@Field(() => String)
	_id: MSchema.Types.ObjectId;

	@Field(() => [String], { nullable: true })
	appointments?: MSchema.Types.ObjectId[];
}

@InputType()
export class ListAgendaInput {
	@Field(() => String, { nullable: true })
	_id?: MSchema.Types.ObjectId;

	@Field(() => String, { nullable: true })
	doctorId?: MSchema.Types.ObjectId;

	@Field(() => [String], { nullable: true })
	appointments?: MSchema.Types.ObjectId[];
}
