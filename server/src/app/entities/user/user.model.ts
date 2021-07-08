import { Document, Schema as MSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { hash, compare, genSalt } from 'bcryptjs';

import { UserAdress } from '../user-adress/user-adress.model';
import { UserPreferences } from '../user-preferences/user-preferences.model';

export enum Roles {
	PATIENT = 'Paciente',
	DOCTOR = 'Doctor',
	ADMIN = 'Administrador'
}

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

	@Field(() => String)
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
	isEmailConf?: boolean;

	@Field(() => String)
	@Prop()
	codRecPwd?: string;

	@Field(() => Roles)
	@Prop({ required: true, default: Roles.PATIENT })
	role?: Roles | number;

	@Field(() => Boolean)
	@Prop({ required: true, default: true })
	isActive?: boolean;

	@Field(() => UserPreferences)
	@Prop({ type: MSchema.Types.ObjectId, ref: UserPreferences.name })
	userPreferences?: MSchema.Types.ObjectId | UserPreferences;

	async hashPwd(pwd: string) {
		try {
			const salt = await genSalt(10);
			const _hash = await hash(pwd, salt);
			return _hash;
		} catch (err) {
			console.error(err);
		}
	}

	async comparePwd(dbPwd: string, enteredPwd: string) {
		return await compare(enteredPwd, dbPwd);
	}
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
