import { Test, TestingModule } from '@nestjs/testing';
import { ReportResolver } from './report.resolver';

describe('ReportResolver', () => {
  let resolver: ReportResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReportResolver],
    }).compile();

    resolver = module.get<ReportResolver>(ReportResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
