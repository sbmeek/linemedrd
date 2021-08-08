import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { Reflector } from '@nestjs/core';

import { User } from 'app/entities/user/user.model';
import { Roles } from 'app/lib/enums';

@Injectable()
export class RolesGuard extends AuthGuard('jwtStrat') implements CanActivate {
	constructor(private reflector: Reflector) {
		super();
	}

	async canActivate(ctx: ExecutionContext): Promise<boolean> {
		const context = GqlExecutionContext.create(ctx);
		const roles =
			this.reflector.getAllAndMerge<Roles[]>('roles', [
				context.getClass(),
				context.getHandler()
			]) || [];
		const isPublic = this.reflector.getAllAndOverride<boolean>('public', [
			context.getHandler(),
			context.getClass()
		]);
		if (!roles || isPublic) return true;
		const user = context.getContext().req.user as User;

		if (user.role === Roles.ADMIN) return true;
		return roles.indexOf(user.role as Roles) !== -1;
	}
}
