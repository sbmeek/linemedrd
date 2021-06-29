import { Test, TestingModule } from '@nestjs/testing';
import { UserAdressResolver } from './user-adress.resolver';

describe('UserAdressResolver', () => {
  let resolver: UserAdressResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserAdressResolver],
    }).compile();

    resolver = module.get<UserAdressResolver>(UserAdressResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
