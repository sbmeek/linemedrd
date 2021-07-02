import { Test, TestingModule } from '@nestjs/testing';
import { SpecialtiesResolver } from './specialties.resolver';

describe('SpecialtiesResolver', () => {
  let resolver: SpecialtiesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpecialtiesResolver],
    }).compile();

    resolver = module.get<SpecialtiesResolver>(SpecialtiesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
