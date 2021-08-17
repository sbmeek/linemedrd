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

import { Roles } from 'app/lib/types';
import { GqlAuthGuard, RolesGuard } from 'app/auth/guard';
import { RequiredRole } from 'app/lib/decorators';
import { Report, ReportDocument } from './report.model';
import {
	CreateReportInput,
	UpdateReportInput,
	ListReportInput
} from './report.input';
import { ReportService } from './report.service';
import { Patient } from '../patient/patient.model';
import { Doctor } from '../doctor/doctor.model';

@Resolver(() => Report)
export class ReportResolver {
	constructor(private reportService: ReportService) {}

	@Query(() => Report)
	@UseGuards(GqlAuthGuard, RolesGuard)
	@RequiredRole(Roles.PATIENT, Roles.ADMIN)
	async report(
		@Args('_id', { type: () => String }) _id: MSchema.Types.ObjectId
	) {
		return this.reportService.getById(_id);
	}

	@Query(() => [Report])
	@UseGuards(GqlAuthGuard, RolesGuard)
	@RequiredRole(Roles.PATIENT, Roles.ADMIN)
	async reports(@Args('filters', { nullable: true }) filters: ListReportInput) {
		return this.reportService.list(filters);
	}

	@Mutation(() => Report)
	@UseGuards(GqlAuthGuard, RolesGuard)
	@RequiredRole(Roles.PATIENT, Roles.ADMIN)
	async createReport(@Args('payload') payload: CreateReportInput) {
		return this.reportService.create(payload);
	}

	@Mutation(() => Report)
	@UseGuards(GqlAuthGuard, RolesGuard)
	@RequiredRole(Roles.PATIENT, Roles.ADMIN)
	async updateReport(@Args('payload') payload: UpdateReportInput) {
		return this.reportService.update(payload);
	}

	@Mutation(() => Report)
	@UseGuards(GqlAuthGuard, RolesGuard)
	@RequiredRole(Roles.PATIENT, Roles.ADMIN)
	async deleteReport(
		@Args('_id', { type: () => String }) _id: MSchema.Types.ObjectId
	) {
		return this.reportService.delete(_id);
	}

	@ResolveField(() => Doctor)
	async doctorId(
		@Parent() report: ReportDocument,
		@Args('populate') populate: boolean
	) {
		if (populate)
			await report
				.populate({
					path: 'doctorId',
					model: Doctor.name
				})
				.execPopulate();
		return report.doctorId;
	}

	@ResolveField(() => Patient)
	async patientId(
		@Parent() report: ReportDocument,
		@Args('populate') populate: boolean
	) {
		if (populate)
			await report
				.populate({
					path: 'patientId',
					model: Patient.name
				})
				.execPopulate();
		return report.patientId;
	}
}
