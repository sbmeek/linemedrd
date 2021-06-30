import { Test, TestingModule } from '@nestjs/testing';
import { PatientResolver } from './patient.resolver';

describe('PatientResolver', () => {
  let resolver: PatientResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientResolver],
    }).compile();

    resolver = module.get<PatientResolver>(PatientResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
