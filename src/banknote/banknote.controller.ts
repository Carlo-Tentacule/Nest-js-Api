import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BanknoteService } from './banknote.service';
import { CreateBanknoteDto } from './dto/create-banknote.dto';
import { UpdateBanknoteDto } from './dto/update-banknote.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('banknote')
@Controller('banknote')
export class BanknoteController {
  constructor(private readonly banknoteService: BanknoteService) { }

  @Post()
  create(@Body() createBanknoteDto: CreateBanknoteDto) {
    return this.banknoteService.create(createBanknoteDto);
  }

  @Get()
  findAll() {
    return this.banknoteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.banknoteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBanknoteDto: UpdateBanknoteDto) {
    return this.banknoteService.update(id, updateBanknoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.banknoteService.remove(+id);
  }
}
