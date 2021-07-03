import { Test, TestingModule } from '@nestjs/testing';
import { UserAdressService } from './user-adress.service';

describe('UserAdressService', () => {
	let service: UserAdressService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [UserAdressService]
		}).compile();

		service = module.get<UserAdressService>(UserAdressService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
