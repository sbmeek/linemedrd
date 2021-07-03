import { Test, TestingModule } from '@nestjs/testing';
import { WorkdayResolver } from './workday.resolver';

describe('WorkdayResolver', () => {
	let resolver: WorkdayResolver;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [WorkdayResolver]
		}).compile();

		resolver = module.get<WorkdayResolver>(WorkdayResolver);
	});

	it('should be defined', () => {
		expect(resolver).toBeDefined();
	});
});
