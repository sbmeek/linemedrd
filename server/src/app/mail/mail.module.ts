import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { JwtModule } from '@nestjs/jwt';

import { MailService } from './mail.service';
import { mailerOptions, jwtOptions } from 'app/lib/options';

@Module({
	imports: [
		MailerModule.forRoot(mailerOptions),
		JwtModule.register(jwtOptions)
	],
	providers: [MailService],
	exports: [MailService]
})
export class MailModule {}
