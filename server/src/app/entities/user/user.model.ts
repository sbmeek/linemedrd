/* eslint-disable @typescript-eslint/ban-types */
import { Document, Schema as MSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { hash, compare, genSalt } from 'bcryptjs';

import { UserAdress } from '../user-adress/user-adress.model';
import { UserPreferences } from '../user-preferences/user-preferences.model';
import { Role } from 'app/lib/enums';

@ObjectType()
@Schema({ timestamps: true })
export class User {
	@Field(() => String)
	_id: MSchema.Types.ObjectId;

	@Field(() => String)
	@Prop({ required: true })
	username?: string;

	@Field(() => String)
	@Prop({ required: true })
	name?: string;

	@Field(() => String)
	@Prop({ required: true })
	lastname?: string;

	@Field(() => String)
	@Prop({ required: true, unique: true })
	email?: string;

	@Prop({ required: true })
	password?: string;

	@Field(() => String)
	@Prop()
	phoneNumber?: string;

	@Field(() => String)
	@Prop()
	homeNumber?: string;

	@Field(() => Date)
	@Prop()
	birthday?: Date;

	@Field(() => Number)
	@Prop()
	age?: number;

	@Field(() => String)
	@Prop({ required: true })
	gender?: string;

	@Field(() => UserAdress)
	@Prop({ type: MSchema.Types.ObjectId, ref: UserAdress.name })
	userAdress?: MSchema.Types.ObjectId | UserAdress;

	@Field(() => String)
	@Prop()
	codConfEmail?: string;

	@Field(() => Boolean)
	@Prop({ default: false })
	isEmailConfirmed?: boolean;

	@Field(() => String)
	@Prop()
	codRecPwd?: string;

	@Field(() => String)
	@Prop({ required: true, type: Role, default: Role.PATIENT })
	role?: Role | number;

	@Field(() => Boolean)
	@Prop({ required: true, default: true })
	isActive?: boolean;

	@Field(() => UserPreferences)
	@Prop({ type: MSchema.Types.ObjectId, ref: UserPreferences.name })
	userPreferences?: MSchema.Types.ObjectId | UserPreferences;

	hashPwd: Function;
	comparePwd: Function;
	assignRole: Function;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.methods.hashPwd = async function (pwd: string): Promise<string> {
	try {
		const salt = await genSalt(10);
		const _hash = await hash(pwd, salt);
		return _hash;
	} catch (err) {
		console.error(err);
	}
};

UserSchema.methods.comparePwd = async function (
	dbPwd: string,
	enteredPwd: string
): Promise<boolean> {
	return await compare(enteredPwd, dbPwd);
};

UserSchema.methods.assignRole = function (n: number): Role {
	switch (n) {
		case 0:
			return Role.PATIENT;
		case 1:
			return Role.DOCTOR;
		case 2:
			return Role.ADMIN;
		default:
			return Role.PATIENT;
	}
};
