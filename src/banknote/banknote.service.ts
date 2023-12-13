import { Injectable } from '@nestjs/common';
import { CreateBanknoteDto } from './dto/create-banknote.dto';
import { UpdateBanknoteDto } from './dto/update-banknote.dto';
import { Banknote } from './entities/banknote.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BanknoteService {
  constructor(
    @InjectRepository(Banknote)
    private banknoteRepository: Repository<Banknote>,
  ) { }

  create(createBanknoteDto: CreateBanknoteDto) {
    return this.banknoteRepository.save(createBanknoteDto)
  }

  findAll() {
    return this.banknoteRepository.find()
  }

  findOne(value: number) {
    return this.banknoteRepository.findOneBy({ value: value })
  }


  async update(id: string, updateBanknoteDto: UpdateBanknoteDto) {
    return this.banknoteRepository.update(id, updateBanknoteDto)
  }

  remove(id: number) {
    return this.banknoteRepository.delete(id)
  }
}
