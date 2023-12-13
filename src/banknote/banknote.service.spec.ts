import { Test, TestingModule } from '@nestjs/testing';
import { BanknoteService } from './banknote.service';

describe('BanknoteService', () => {
  let service: BanknoteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BanknoteService],
    }).compile();

    service = module.get<BanknoteService>(BanknoteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
