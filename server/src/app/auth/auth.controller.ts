import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';

import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { JwtAuthGuard } from 'app/auth/guard/jwt-auth.guard';
import { CurrentUser } from 'app/lib/decorators/currentUser.decorator';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@UseGuards(LocalAuthGuard)
	@Post('login')
	login(@Req() req: Request) {
		return this.authService.login(req);
	}

	@UseGuards(JwtAuthGuard)
	@Post('logout')
	logout(@Req() req: Request) {
		return this.authService.logout(req);
	}

	@UseGuards(JwtAuthGuard)
	@Post('check-auth')
	async checkAuth(@CurrentUser() currentUser: any) {
		return currentUser;
	}

	@Post('verify-email-conf-code')
	async verifyEmailConfirmCode(@Req() req: Request) {
		const { encToken } = req.body;
		return await this.authService.verifyEmailConfCode(encToken);
	}

	@Post('recover-pwd/request')
	async recoverPwdRequest(@Req() req: Request) {
		const { origin } = req.headers;
		const { body } = req;
		return await this.authService.recoverPwdRequest(body.email, origin);
	}

	@Post('recover-pwd/set-new-pwd')
	async recoverPwdSetNew(@Req() req: Request) {
		const { encToken, newPwd } = req.body;
		return await this.authService.recoverPwdSetNew(encToken, newPwd);
	}
}
