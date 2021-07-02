import { Document, Schema as MSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Schema({ timestamps: true })
export class Specialties {
	@Field(() => String)
	_id: MSchema.Types.ObjectId;

	@Field(() => String)
	@Prop({ required: true })
	description: string;
}

export type SpecialtiesDocument = Specialties & Document;
export const SpecialtiesSchema = SchemaFactory.createForClass(Specialties);
