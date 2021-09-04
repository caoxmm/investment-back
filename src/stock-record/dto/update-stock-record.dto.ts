import { PartialType } from '@nestjs/mapped-types';
import { CreateStockRecordDto } from './create-stock-record.dto';

export class UpdateStockRecordDto extends PartialType(CreateStockRecordDto) {}
