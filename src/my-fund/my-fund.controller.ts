import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { MyFundService } from './my-fund.service';
import { CreateMyFundDto } from './dto/create-my-fund.dto';
import { UpdateMyFundDto } from './dto/update-my-fund.dto';

@Controller('my-fund')
export class MyFundController {
  constructor(private readonly myFundService: MyFundService) {}

  @Post()
  create(@Body() createMyFundDto: CreateMyFundDto) {
    return this.myFundService.create(createMyFundDto);
  }

  @Get()
  findAll() {
    return this.myFundService.findAll();
  }

  @Get('query')
  query(@Query('order') order: string) {
    console.log('order', order); //ccc-log
    return this.myFundService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.myFundService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMyFundDto: UpdateMyFundDto) {
    return this.myFundService.update(id, updateMyFundDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.myFundService.remove(id);
  }
}
