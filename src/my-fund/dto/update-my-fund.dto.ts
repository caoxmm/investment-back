import { PartialType } from '@nestjs/mapped-types';
import { CreateMyFundDto } from './create-my-fund.dto';

export class UpdateMyFundDto extends PartialType(CreateMyFundDto) {}
