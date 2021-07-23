import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ServeStaticModule } from '@nestjs/serve-static';

import {
	dbUri,
	gqlOptions,
	mongoOptions,
	serveStaticOptions
} from 'app/lib/options';
import { UserModule } from 'app/entities/user/user.module';
import { UserAdressModule } from 'app/entities/user-adress/user-adress.module';
import { UserPreferencesModule } from 'app/entities/user-preferences/user-preferences.module';
import { DaysModule } from 'app/entities/days/days.module';
import { WorkdayModule } from 'app/entities/workday/workday.module';
import { PatientModule } from 'app/entities/patient/patient.module';
import { SpecialtiesModule } from 'app/entities/specialties/specialties.module';
import { DoctorModule } from 'app/entities/doctor/doctor.module';
import { ReportModule } from 'app/entities/report/report.module';
import { AppointmentModule } from 'app/entities/appointment/appointment.module';
import { AppointmentContentModule } from 'app/entities/appointment-content/appointment-content.module';
import { AgendaModule } from 'app/entities/agenda/agenda.module';
import { RecordModule } from 'app/entities/record/record.module';
import { AuthModule } from 'app/auth/auth.module';
import { MailModule } from 'app/mail/mail.module';

@Module({
	imports: [
		ServeStaticModule.forRoot(serveStaticOptions),
		MongooseModule.forRoot(dbUri[process.env.NODE_ENV], mongoOptions),
		GraphQLModule.forRoot(gqlOptions),
		UserModule,
		UserAdressModule,
		UserPreferencesModule,
		DaysModule,
		WorkdayModule,
		PatientModule,
		SpecialtiesModule,
		DoctorModule,
		ReportModule,
		AppointmentModule,
		AppointmentContentModule,
		AgendaModule,
		RecordModule,
		AuthModule,
		MailModule
	]
})
export class AppModule {}
