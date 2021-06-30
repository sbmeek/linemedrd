import { Document, Schema as MSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

import { UserAdress } from '../user-adress/user-adress.model';
import { Days } from '../days/days.model';

@ObjectType()
@Schema()
export class Workday {
	@Field(() => String)
	_id: MSchema.Types.ObjectId;

	@Field(() => UserAdress)
	@Prop({ required: true, type: MSchema.Types.ObjectId, ref: UserAdress.name })
	adress: MSchema.Types.ObjectId | UserAdress;

	@Field(() => Days)
	@Prop({ required: true, type: MSchema.Types.ObjectId, ref: Days.name })
	days: MSchema.Types.ObjectId | Days;

	@Field(() => [Number])
	@Prop({ type: [Number] })
	hourRange?: number[];

	@Field(() => String)
	@Prop({ required: true })
	contact: string;
}

export type WorkdayDocument = Workday & Document;
export const WorkdaySchema = SchemaFactory.createForClass(Workday);
