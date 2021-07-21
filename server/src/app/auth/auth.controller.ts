import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';

import { User } from 'app/entities/user/user.model';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/local-auth.guard';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@UseGuards(LocalAuthGuard)
	@Post('login')
	login(@Req() req: Request): { accessToken: string } {
		return this.authService.login(req.user as User);
	}
}
