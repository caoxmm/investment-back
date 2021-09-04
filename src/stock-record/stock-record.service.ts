import { Injectable } from '@nestjs/common';
import { CreateStockRecordDto } from './dto/create-stock-record.dto';
import { UpdateStockRecordDto } from './dto/update-stock-record.dto';

@Injectable()
export class StockRecordService {
  create(createStockRecordDto: CreateStockRecordDto) {
    return 'This action adds a new stockRecord';
  }

  findAll() {
    return `This action returns all stockRecord`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stockRecord`;
  }

  update(id: number, updateStockRecordDto: UpdateStockRecordDto) {
    return `This action updates a #${id} stockRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} stockRecord`;
  }
}
