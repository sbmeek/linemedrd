import { ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

export class GqlAuthGuard extends AuthGuard('jwt') {
	getRequest(context: ExecutionContext): any {
		const ctx = GqlExecutionContext.create(context);
		return ctx.getContext().req;
	}
}

/*
	Guard for gql queries / mutations.
	Use: in the http headers of the request pass the following...
	{
  		"Authorization": "Bearer <token>"
	}
*/
