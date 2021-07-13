import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Appointment, AppointmentSchema } from './appointment.model';
import { AppointmentService } from './appointment.service';
import { AppointmentResolver } from './appointment.resolver';

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: Appointment.name,
				schema: AppointmentSchema
			}
		])
	],
	providers: [AppointmentService, AppointmentResolver]
})
export class AppointmentModule {}
