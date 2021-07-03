import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { GraphQLError, GraphQLFormattedError } from 'graphql';

import { AppService } from 'app/app.service';
import { AppController } from 'app/app.controller';
import { UserModule } from 'app/entities/user/user.module';
import { UserAdressModule } from 'app/entities/user-adress/user-adress.module';
import { UserPreferencesModule } from 'app/entities/user-preferences/user-preferences.module';
import { DaysModule } from 'app/entities/days/days.module';
import { WorkdayModule } from 'app/entities/workday/workday.module';
import { PatientModule } from 'app/entities/patient/patient.module';
import { SpecialtiesModule } from 'app/entities/specialties/specialties.module';

@Module({
	imports: [
		MongooseModule.forRoot(process.env.DB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: true,
			useCreateIndex: true,
			connectTimeoutMS: 1000,
			connectionFactory: conn => {
				conn
					.then(({ name }) => console.log(`Connected to db: ${name}`))
					.catch((err: string) => console.error(`[HAY BOBO] ${err}`));
				return conn;
			}
		}),
		GraphQLModule.forRoot({
			playground: process.env.NODE_ENV === 'development',
			autoSchemaFile: join(__dirname, 'src/schema.gql'),
			sortSchema: true,
			fieldResolverEnhancers: ['interceptors'],
			formatError: (error: GraphQLError) => {
				if (error.message === 'VALIDATION_ERROR') {
					const extensions = {
						code: 'VALIDATION_ERROR',
						errors: []
					};

					Object.keys(error.extensions.invalidArgs).forEach(key => {
						const constraints = [];
						Object.keys(error.extensions.invalidArgs[key].constraints).forEach(
							_key => {
								constraints.push(
									error.extensions.invalidArgs[key].constraints[_key]
								);
							}
						);

						extensions.errors.push({
							field: error.extensions.invalidArgs[key].property,
							errors: constraints
						});
					});

					const graphQLFormattedError: GraphQLFormattedError = {
						message: 'VALIDATION_ERROR',
						extensions: extensions
					};

					return graphQLFormattedError;
				} else {
					return error;
				}
			}
		}),
		UserModule,
		UserAdressModule,
		UserPreferencesModule,
		DaysModule,
		WorkdayModule,
		PatientModule,
		SpecialtiesModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
