import { Test, TestingModule } from '@nestjs/testing';
import { AgendaResolver } from './agenda.resolver';

describe('AgendaResolver', () => {
	let resolver: AgendaResolver;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [AgendaResolver]
		}).compile();

		resolver = module.get<AgendaResolver>(AgendaResolver);
	});

	it('should be defined', () => {
		expect(resolver).toBeDefined();
	});
});
