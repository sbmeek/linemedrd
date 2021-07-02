import { Test, TestingModule } from '@nestjs/testing';
import { SpecialtiesService } from './specialties.service';

describe('SpecialtiesService', () => {
  let service: SpecialtiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpecialtiesService],
    }).compile();

    service = module.get<SpecialtiesService>(SpecialtiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
