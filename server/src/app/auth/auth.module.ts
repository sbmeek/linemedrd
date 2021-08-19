import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { jwtOptions, passportOptions } from 'app/config/options';
import { UserModule } from 'app/entities/user/user.module';
import { MailModule } from 'app/mail/mail.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy, LocalStrategy } from './strategies';

@Module({
	imports: [
		PassportModule.register(passportOptions),
		JwtModule.register(jwtOptions),
		UserModule,
		MailModule
	],
	providers: [AuthService, JwtStrategy, LocalStrategy],
	controllers: [AuthController]
})
export class AuthModule {}
