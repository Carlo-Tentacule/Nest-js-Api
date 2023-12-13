import { PartialType } from '@nestjs/swagger';
import { CreateBanknoteDto } from './create-banknote.dto';

export class UpdateBanknoteDto extends PartialType(CreateBanknoteDto) {}
