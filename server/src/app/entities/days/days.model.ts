import { Document, Schema as MSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Schema()
export class Days {
	@Field(() => String)
	_id: MSchema.Types.ObjectId;

	@Field(() => Boolean)
	@Prop({ default: false })
	mon?: boolean;

	@Field(() => Boolean)
	@Prop({ default: false })
	tue?: boolean;

	@Field(() => Boolean)
	@Prop({ default: false })
	wed?: boolean;

	@Field(() => Boolean)
	@Prop({ default: false })
	thu?: boolean;

	@Field(() => Boolean)
	@Prop({ default: false })
	fri?: boolean;

	@Field(() => Boolean)
	@Prop({ default: false })
	sat?: boolean;

	@Field(() => Boolean)
	@Prop({ default: false })
	sun?: boolean;
}

export type DaysDocument = Days & Document;
export const DaysSchema = SchemaFactory.createForClass(Days);
