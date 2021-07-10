import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ServeStaticModule } from '@nestjs/serve-static';

import { AppService } from 'app/app.service';
import { mongoOptions, gqlOptions, serveStaticOptions } from 'app/lib/options';
import { UserModule } from 'app/entities/user/user.module';
import { UserAdressModule } from 'app/entities/user-adress/user-adress.module';
import { UserPreferencesModule } from 'app/entities/user-preferences/user-preferences.module';
import { DaysModule } from 'app/entities/days/days.module';
import { WorkdayModule } from 'app/entities/workday/workday.module';
import { PatientModule } from 'app/entities/patient/patient.module';
import { SpecialtiesModule } from 'app/entities/specialties/specialties.module';
import { DoctorModule } from 'app/entities/doctor/doctor.module';
import { ReportModule } from 'app/entities/report/report.module';

@Module({
	imports: [
		ServeStaticModule.forRoot(serveStaticOptions),
		MongooseModule.forRoot(process.env.DB_URI, mongoOptions),
		GraphQLModule.forRoot(gqlOptions),
		UserModule,
		UserAdressModule,
		UserPreferencesModule,
		DaysModule,
		WorkdayModule,
		PatientModule,
		SpecialtiesModule,
		DoctorModule,
		ReportModule
	],
	providers: [AppService]
})
export class AppModule {}
