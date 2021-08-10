import {
	Args,
	Mutation,
	Parent,
	Query,
	ResolveField,
	Resolver
} from '@nestjs/graphql';
import { Schema as MSchema } from 'mongoose';
import { UseGuards } from '@nestjs/common';
import { GraphQLUpload } from 'apollo-server-express';
import { createWriteStream } from 'fs';

import { Roles, Updload } from 'app/lib/types';
import { GqlAuthGuard } from 'app/auth/guard/gql-auth.guard';
import { RolesGuard } from 'app/auth/guard/roles.guard';
import { RequiredRole } from 'app/lib/decorators/roles.decorator';
import { Public } from 'app/lib/decorators/public.decorator';
import {
	ApmtContentDocument,
	AppointmentContent
} from './appointment-content.model';
import {
	CreateApmtContentInput,
	UpdateApmtContentInput,
	ListApmtContentInput
} from './appointment-content.input';
import { ApmtContentService } from './appointment-content.service';
import { Specialties } from '../specialties/specialties.model';

@Resolver(() => AppointmentContent)
export class AppointmentContentResolver {
	constructor(private apmtContentService: ApmtContentService) {}

	@Query(() => AppointmentContent)
	@UseGuards(GqlAuthGuard, RolesGuard)
	@RequiredRole(Roles.PATIENT, Roles.ADMIN)
	async apmtContent(
		@Args('_id', { type: () => String }) _id: MSchema.Types.ObjectId
	) {
		return this.apmtContentService.getById(_id);
	}

	@Query(() => [AppointmentContent])
	@UseGuards(GqlAuthGuard, RolesGuard)
	@RequiredRole(Roles.PATIENT, Roles.ADMIN)
	async apmtContents(
		@Args('filters', { nullable: true }) filters: ListApmtContentInput
	) {
		return this.apmtContentService.list(filters);
	}

	@Mutation(() => AppointmentContent)
	@UseGuards(GqlAuthGuard, RolesGuard)
	@RequiredRole(Roles.PATIENT, Roles.ADMIN)
	async createApmtContent(@Args('payload') payload: CreateApmtContentInput) {
		return this.apmtContentService.create(payload);
	}

	@Mutation(() => AppointmentContent)
	@UseGuards(GqlAuthGuard, RolesGuard)
	@RequiredRole(Roles.PATIENT, Roles.ADMIN)
	async updateApmtContent(@Args('payload') payload: UpdateApmtContentInput) {
		return this.apmtContentService.update(payload);
	}

	@Mutation(() => AppointmentContent)
	@UseGuards(GqlAuthGuard, RolesGuard)
	@RequiredRole(Roles.PATIENT, Roles.ADMIN)
	async deleteApmtContent(
		@Args('_id', { type: () => String }) _id: MSchema.Types.ObjectId
	) {
		return this.apmtContentService.delete(_id);
	}

	@Mutation(() => Boolean)
	@Public() //temporal
	async uploadContentFiles(
		@Args('attachment', { type: () => GraphQLUpload })
		{ filename, createReadStream }: Updload
	): Promise<boolean> {
		return new Promise(async (res, rej) => {
			createReadStream()
				.pipe(createWriteStream(process.cwd() + `/files/${filename}`))
				.on('finish', () => res(true))
				.on('error', err => {
					console.log(err);
					rej(false);
				});
		});
	}

	@ResolveField(() => Specialties)
	async specialtyId(
		@Parent() apmtContent: ApmtContentDocument,
		@Args('populate') populate: boolean
	) {
		if (populate)
			await apmtContent
				.populate({
					path: 'specialtyId',
					model: Specialties.name
				})
				.execPopulate();
		return apmtContent.specialtyId;
	}
}
