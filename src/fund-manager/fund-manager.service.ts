import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { CreateFundManagerDto } from './dto/create-fund-manager.dto';
import { UpdateFundManagerDto } from './dto/update-fund-manager.dto';
import { FundManager } from './interfaces/fund-manager.interface';

@Injectable()
export class FundManagerService {
  constructor(
    @Inject('FUND_MANAGER_MODEL')
    private fundManagerModel: Model<FundManager>,
  ) {}
  create(createFundManagerDto: CreateFundManagerDto) {
    const createdFundManager = new this.fundManagerModel(createFundManagerDto);
    return createdFundManager.save();
  }

  findAll() {
    return this.fundManagerModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} fundManager`;
  }

  update(id: number, updateFundManagerDto: UpdateFundManagerDto) {
    return `This action updates a #${id} fundManager`;
  }

  remove(id: number) {
    return `This action removes a #${id} fundManager`;
  }
}
