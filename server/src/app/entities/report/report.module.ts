import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Report, ReportSchema } from './report.model';
import { ReportService } from './report.service';
import { ReportResolver } from './report.resolver';

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: Report.name,
				schema: ReportSchema
			}
		])
	],
	providers: [ReportService, ReportResolver]
})
export class ReportModule {}
