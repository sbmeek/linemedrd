import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentContentService } from './appointment-content.service';

describe('AppointmentContentService', () => {
  let service: AppointmentContentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppointmentContentService],
    }).compile();

    service = module.get<AppointmentContentService>(AppointmentContentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
