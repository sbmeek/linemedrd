import { Module } from '@nestjs/common';
import { AppController } from 'app/app.controller';
import { AppService } from 'app/app.service';
import { UserModule } from 'app/user/user.module';
import { UserAdressModule } from 'app/user-adress/user-adress.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
	imports: [
		MongooseModule.forRoot(process.env.DB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: true,
			useCreateIndex: true,
			connectTimeoutMS: 1000,
			connectionFactory: (conn) => {
				conn
					.then(({ name }) => console.log(`Connected to db: ${name}`))
					.catch((err: string) => console.error(`[HAY BOBO] ${err}`));
				return conn;
			}
		}),
		GraphQLModule.forRoot({
			playground: process.env.NODE_ENV === 'development',
			autoSchemaFile: join(__dirname, 'src/schema.gql'),
			sortSchema: true
		}),
		UserModule,
		UserAdressModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
