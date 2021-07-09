import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentContentResolver } from './appointment-content.resolver';

describe('AppointmentContentResolver', () => {
  let resolver: AppointmentContentResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppointmentContentResolver],
    }).compile();

    resolver = module.get<AppointmentContentResolver>(AppointmentContentResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
