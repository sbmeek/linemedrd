import { Test, TestingModule } from '@nestjs/testing';
import { RecordResolver } from './record.resolver';

describe('RecordResolver', () => {
	let resolver: RecordResolver;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [RecordResolver]
		}).compile();

		resolver = module.get<RecordResolver>(RecordResolver);
	});

	it('should be defined', () => {
		expect(resolver).toBeDefined();
	});
});
