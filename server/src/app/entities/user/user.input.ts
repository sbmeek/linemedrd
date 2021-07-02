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

	@Field(() => String)
	phoneNumber: string;

	@Field(() => String)
	homeNumber: string;

	@Field(() => Date)
	birthday: Date;

	@Field(() => Number)
	age: number;

	@Field(() => String)
	gender: string;

	@Field(() => String)
	userAdress: MSchema.Types.ObjectId;

	@Field(() => String)
	codConfEmail: string;

	@Field(() => Boolean)
	isEmailConf: boolean;

	@Field(() => String)
	codRecConf: string;

	@Field(() => Number)
	role: number;

	@Field(() => Boolean)
	isActive: boolean;

	@Field(() => String)
	preferences: MSchema.Types.ObjectId;
}

@InputType()
export class UpdateUserInput {
	@Field(() => String)
	_id: string;

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
	_id?: string;

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
