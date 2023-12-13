import { Module } from '@nestjs/common';
import { BanknoteService } from './banknote.service';
import { BanknoteController } from './banknote.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Banknote } from './entities/banknote.entity';

@Module({
  controllers: [BanknoteController],
  providers: [BanknoteService],
  imports: [TypeOrmModule.forFeature([Banknote])],
  exports: [BanknoteService],
})
export class BanknoteModule { }