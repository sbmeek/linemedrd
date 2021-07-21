import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { jwtOptions, passportOptions } from 'app/lib/options';
import { UserModule } from 'app/entities/user/user.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
	imports: [
		PassportModule.register(passportOptions),
		JwtModule.register(jwtOptions),
		UserModule
	],
	providers: [AuthService, JwtStrategy, LocalStrategy],
	controllers: [AuthController]
})
export class AuthModule {}
