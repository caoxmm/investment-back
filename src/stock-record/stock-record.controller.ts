import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StockRecordService } from './stock-record.service';
import { CreateStockRecordDto } from './dto/create-stock-record.dto';
import { UpdateStockRecordDto } from './dto/update-stock-record.dto';

@Controller('stock-record')
export class StockRecordController {
  constructor(private readonly stockRecordService: StockRecordService) {}

  @Post()
  create(@Body() createStockRecordDto: CreateStockRecordDto) {
    return this.stockRecordService.create(createStockRecordDto);
  }

  @Get()
  findAll() {
    return this.stockRecordService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockRecordService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStockRecordDto: UpdateStockRecordDto) {
    return this.stockRecordService.update(+id, updateStockRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockRecordService.remove(+id);
  }
}
