import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FundRecordService } from './fund-record.service';
import { CreateFundRecordDto } from './dto/create-fund-record.dto';
import { UpdateFundRecordDto } from './dto/update-fund-record.dto';

@Controller('fund-record')
export class FundRecordController {
  constructor(private readonly fundRecordService: FundRecordService) {}

  @Post()
  create(@Body() createFundRecordDto: CreateFundRecordDto) {
    return this.fundRecordService.create(createFundRecordDto);
  }

  @Get()
  findAll() {
    return this.fundRecordService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fundRecordService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFundRecordDto: UpdateFundRecordDto) {
    return this.fundRecordService.update(+id, updateFundRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fundRecordService.remove(+id);
  }
}
