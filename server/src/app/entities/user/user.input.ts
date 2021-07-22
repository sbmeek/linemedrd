import { Schema as MSchema } from 'mongoose';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
	@Field(() => String)
	username: string;

	@Field(() => String)
	name: string;

	@Field(() => String)
	lastname: string;

	@Field(() => String)
	email: string;

	@Field(() => String)
	password: string;

	@Field(() => String, { nullable: true })
	phoneNumber?: string;

	@Field(() => String, { nullable: true })
	homeNumber?: string;

	@Field(() => Date, { nullable: true })
	birthday?: Date;

	@Field(() => Number, { nullable: true })
	age?: number;

	@Field(() => String)
	gender: string;

	@Field(() => String, { nullable: true })
	userAdress?: MSchema.Types.ObjectId;

	@Field(() => String, { nullable: true })
	codConfEmail?: string;

	@Field(() => Boolean, { defaultValue: false })
	isEmailConfirmed?: boolean;

	@Field(() => String, { nullable: true })
	codRecPwd?: string;

	@Field(() => Number, { defaultValue: 0 })
	role: number;

	@Field(() => Boolean, { defaultValue: true })
	isActive: boolean;

	@Field(() => String, { nullable: true })
	userPreferences?: MSchema.Types.ObjectId;
}

@InputType()
export class UpdateUserInput {
	@Field(() => String)
	_id: MSchema.Types.ObjectId;

	@Field(() => String, { nullable: true })
	username?: string;

	@Field(() => String, { nullable: true })
	email?: string;

	@Field(() => String, { nullable: true })
	password?: string;

	@Field(() => String, { nullable: true })
	phoneNumber?: string;

	@Field(() => String, { nullable: true })
	homeNumber?: string;

	@Field(() => Number, { nullable: true })
	role?: number;
}

@InputType()
export class ListUserInput {
	@Field(() => String, { nullable: true })
	_id?: MSchema.Types.ObjectId;

	@Field(() => String, { nullable: true })
	username?: string;

	@Field(() => String, { nullable: true })
	name?: string;

	@Field(() => String, { nullable: true })
	lastname?: string;

	@Field(() => String, { nullable: true })
	email?: string;

	@Field(() => Number, { nullable: true })
	role?: number;

	@Field(() => String, { nullable: true })
	gender?: string;
}
