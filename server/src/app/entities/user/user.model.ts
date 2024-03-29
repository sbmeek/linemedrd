import { Document, Schema as MSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { hash, compare, genSalt } from 'bcryptjs';

import { Roles } from 'app/lib/types';
import { UserAdress } from '../user-adress/user-adress.model';
import { UserPreferences } from '../user-preferences/user-preferences.model';

@ObjectType()
@Schema({ timestamps: true })
export class User {
	@Field(() => String)
	_id: MSchema.Types.ObjectId;

	@Field(() => String)
	@Prop({ required: true })
	username?: string;

	@Field(() => String)
	@Prop()
	name?: string;

	@Field(() => String)
	@Prop()
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
	@Prop()
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
	@Prop({ required: true, type: String, default: Roles.PATIENT })
	role?: Roles | number;

	@Field(() => Boolean)
	@Prop({ required: true, default: true })
	isActive?: boolean;

	@Field(() => UserPreferences)
	@Prop({ type: MSchema.Types.ObjectId, ref: UserPreferences.name })
	userPreferences?: MSchema.Types.ObjectId | UserPreferences;

	hashPwd: (pwd: string) => Promise<string>;
	comparePwd: (dbPwd: string, enteredPwd: string) => Promise<boolean>;
	assignRole: (n: number) => Roles;
	clientSideData: () => { username: string; email: string; role: string };
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.methods.hashPwd = async function (pwd: string): Promise<string> {
	try {
		const salt = await genSalt(10);
		const hashedPwd = await hash(pwd, salt);
		return hashedPwd;
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

UserSchema.methods.assignRole = function (n: number): Roles {
	switch (n) {
		case 0:
			return Roles.PATIENT;
		case 1:
			return Roles.DOCTOR;
		case 2:
			return Roles.ADMIN;
		default:
			return Roles.PATIENT;
	}
};

UserSchema.methods.clientSideData = function () {
	const user = this as UserDocument;
	return { username: user.username, email: user.email, role: user.role };
};
