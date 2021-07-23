import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { User, UserSchema } from './user.model';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { MailModule } from 'app/mail/mail.module';

@Module({
	imports: [
		MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
		MailModule
	],
	providers: [UserService, UserResolver],
	exports: [UserService]
})
export class UserModule {}
