import { Schema as MSchema } from 'mongoose';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePrefInput {
	@Field(() => Boolean)
	isEmailPublic: boolean;

	@Field(() => Boolean)
	isHomeNumberPublic: boolean;

	@Field(() => Boolean)
	isPhoneNumberPublic: boolean;

	@Field(() => Boolean)
	isUserAdressPublic: boolean;
}

@InputType()
export class UpdatePrefInput {
	@Field(() => String)
	_id: MSchema.Types.ObjectId;

	@Field(() => Boolean, { nullable: true })
	isEmailPublic?: boolean;

	@Field(() => Boolean, { nullable: true })
	isHomeNumberPublic?: boolean;

	@Field(() => Boolean, { nullable: true })
	isPhoneNumberPublic?: boolean;

	@Field(() => Boolean, { nullable: true })
	isUserAdressPublic?: boolean;
}
