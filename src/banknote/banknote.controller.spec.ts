import { Test, TestingModule } from '@nestjs/testing';
import { BanknoteController } from './banknote.controller';
import { BanknoteService } from './banknote.service';

describe('BanknoteController', () => {
  let controller: BanknoteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BanknoteController],
      providers: [BanknoteService],
    }).compile();

    controller = module.get<BanknoteController>(BanknoteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
