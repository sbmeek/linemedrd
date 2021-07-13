import { Test, TestingModule } from '@nestjs/testing';
import { AgendaService } from './agenda.service';

describe('AgendaService', () => {
	let service: AgendaService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [AgendaService]
		}).compile();

		service = module.get<AgendaService>(AgendaService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
