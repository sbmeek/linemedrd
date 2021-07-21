import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const CurrentUser = createParamDecorator(
	(_data: unknown, context: ExecutionContext) => {
		if (context.getType() === 'http') {
			return context.switchToHttp().getRequest().user;
		}

		const ctx = GqlExecutionContext.create(context);
		return ctx.getContext().req.user;
	}
);

/*
    Decorator that returns the current user, can be used both in REST endpoints
    as in queries / mutations of gql.
    Use:
    function_x(@CurrentUser() user: User) {
        console.log(user);
    }
*/
