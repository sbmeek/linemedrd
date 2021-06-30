import { Test, TestingModule } from '@nestjs/testing';
import { WorkdayService } from './workday.service';

describe('WorkdayService', () => {
  let service: WorkdayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkdayService],
    }).compile();

    service = module.get<WorkdayService>(WorkdayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
