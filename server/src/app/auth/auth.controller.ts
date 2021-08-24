import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';

import { AuthService } from './auth.service';
import { CurrentUser } from 'app/lib/decorators';
import { LocalAuthGuard, JwtAuthGuard } from './guard';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post('login')
	@UseGuards(LocalAuthGuard)
	login(@Req() req: Request) {
		return this.authService.login(req);
	}

	@Post('logout')
	@UseGuards(JwtAuthGuard)
	logout(@Req() req: Request) {
		return this.authService.logout(req);
	}

	@Post('check-auth')
	@UseGuards(JwtAuthGuard)
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
		const { email } = req.body;
		const { origin } = req.headers;
		return await this.authService.recoverPwdRequest(email, origin);
	}

	@Post('recover-pwd/set-new-pwd')
	async recoverPwdSetNew(@Req() req: Request) {
		const { encToken, newPwd } = req.body;
		return await this.authService.recoverPwdSetNew(encToken, newPwd);
	}
}
