//import { Schema as MSchema } from 'mongoose';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateDaysInput {
	@Field(() => Boolean)
	mon: boolean;

	@Field(() => Boolean)
	tue: boolean;

	@Field(() => Boolean)
	wed: boolean;

	@Field(() => Boolean)
	thu: boolean;

	@Field(() => Boolean)
	fri: boolean;

	@Field(() => Boolean)
	sat: boolean;

	@Field(() => Boolean)
	sun: boolean;
}

@InputType()
export class UpdateDaysInput {
	@Field(() => String)
	_id: string;

	@Field(() => Boolean, { nullable: true })
	mon?: boolean;

	@Field(() => Boolean, { nullable: true })
	tue?: boolean;

	@Field(() => Boolean, { nullable: true })
	wed?: boolean;

	@Field(() => Boolean, { nullable: true })
	thu?: boolean;

	@Field(() => Boolean, { nullable: true })
	fri?: boolean;

	@Field(() => Boolean, { nullable: true })
	sat?: boolean;

	@Field(() => Boolean, { nullable: true })
	sun?: boolean;
}
