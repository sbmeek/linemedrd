import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import {
	AppointmentContent,
	ApmtContentSchema
} from './appointment-content.model';
import { ApmtContentService } from './appointment-content.service';
import { AppointmentContentResolver } from './appointment-content.resolver';

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: AppointmentContent.name,
				schema: ApmtContentSchema
			}
		])
	],
	providers: [ApmtContentService, AppointmentContentResolver]
})
export class AppointmentContentModule {}
