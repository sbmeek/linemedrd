import { Test, TestingModule } from '@nestjs/testing';
import { UserPreferencesResolver } from './user-preferences.resolver';

describe('UserPreferencesResolver', () => {
	let resolver: UserPreferencesResolver;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [UserPreferencesResolver]
		}).compile();

		resolver = module.get<UserPreferencesResolver>(UserPreferencesResolver);
	});

	it('should be defined', () => {
		expect(resolver).toBeDefined();
	});
});
