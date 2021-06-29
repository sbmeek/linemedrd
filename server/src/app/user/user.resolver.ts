import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class UserResolver {
	@Query(() => String)
	ping() {
		return 'bobo';
	}
}
