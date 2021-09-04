import { MyDocFund } from './interfaces/my-fund.interface';
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateMyFundDto } from './dto/create-my-fund.dto';
import { UpdateMyFundDto } from './dto/update-my-fund.dto';

@Injectable()
export class MyFundService {
  constructor(
    @Inject('MY_FUND_MODEL')
    private myFundModel: Model<MyDocFund>,
  ) {}

  create(createMyFundDto: CreateMyFundDto) {
    const createdFundManager = new this.myFundModel(createMyFundDto);
    return createdFundManager.save();
  }

  findAll() {
    return this.myFundModel.find().exec();
  }

  findOne(id: string) {
    return this.myFundModel.find({ _id: id }).exec();
  }

  update(id: string, updateMyFundDto: UpdateMyFundDto) {
    return this.myFundModel.updateOne({ _id: id }, updateMyFundDto);
  }

  remove(id: string) {
    return this.myFundModel.remove({ _id: id });
  }
}
