import { Injectable } from '@nestjs/common';
import { CreateFundRecordDto } from './dto/create-fund-record.dto';
import { UpdateFundRecordDto } from './dto/update-fund-record.dto';

@Injectable()
export class FundRecordService {
  create(createFundRecordDto: CreateFundRecordDto) {
    return 'This action adds a new fundRecord';
  }

  findAll() {
    return `This action returns all fundRecord`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fundRecord`;
  }

  update(id: number, updateFundRecordDto: UpdateFundRecordDto) {
    return `This action updates a #${id} fundRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} fundRecord`;
  }
}
