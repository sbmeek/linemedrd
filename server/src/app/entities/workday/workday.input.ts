import { Schema as MSchema } from 'mongoose';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateWorkdayInput {
	@Field(() => String)
	adress: MSchema.Types.ObjectId;

	@Field(() => String)
	days: MSchema.Types.ObjectId;

	@Field(() => [Number])
	hourRange: number[];

	@Field(() => String)
	contact: string;
}

@InputType()
export class UpdateWorkdayInput {
	@Field(() => String)
	_id: string;

	@Field(() => String, { nullable: true })
	adress?: MSchema.Types.ObjectId;

	@Field(() => String, { nullable: true })
	days?: MSchema.Types.ObjectId;

	@Field(() => [Number], { nullable: true })
	hourRange?: number[];

	@Field(() => String, { nullable: true })
	contact?: string;
}
