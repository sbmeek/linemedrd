import { Test, TestingModule } from '@nestjs/testing';
import { DaysResolver } from './days.resolver';

describe('DaysResolver', () => {
  let resolver: DaysResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DaysResolver],
    }).compile();

    resolver = module.get<DaysResolver>(DaysResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
