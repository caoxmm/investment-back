import { PartialType } from '@nestjs/mapped-types';
import { CreateFundManagerDto } from './create-fund-manager.dto';

export class UpdateFundManagerDto extends PartialType(CreateFundManagerDto) {}
