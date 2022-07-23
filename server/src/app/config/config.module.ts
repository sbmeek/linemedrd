import { DynamicModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ServeStaticModule } from '@nestjs/serve-static';

import {
	dbUri,
	gqlOptions,
	mongoOptions,
	serveStaticOptions
} from 'app/config/options';
import { ConfigModuleOptions } from 'app/lib/types';
import { AuthModule } from 'app/auth/auth.module';
import { MailModule } from 'app/mail/mail.module';
import {
	AgendaModule,
	AppointmentContentModule,
	AppointmentModule,
	DaysModule,
	DoctorModule,
	PatientModule,
	RecordModule,
	ReportModule,
	SpecialtiesModule,
	UserAdressModule,
	UserModule,
	UserPreferencesModule,
	WorkdayModule
} from 'app/entities';

@Module({})
export class ConfigModule {
	static register(options: ConfigModuleOptions): DynamicModule {
		const configModule = {
			module: ConfigModule,
			imports: [
				options.env !== 'development'
					? ServeStaticModule.forRoot(serveStaticOptions)
					: null,
				MongooseModule.forRoot(dbUri[options.env], mongoOptions),
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
		};

		configModule.imports = configModule.imports.filter(module => {
			return module != null;
		});
		return configModule;
	}
}
