import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FundManagerService } from './fund-manager.service';
import { CreateFundManagerDto } from './dto/create-fund-manager.dto';
import { UpdateFundManagerDto } from './dto/update-fund-manager.dto';

@Controller('fund-manager')
export class FundManagerController {
  constructor(private readonly fundManagerService: FundManagerService) {}

  @Post()
  create(@Body() createFundManagerDto: CreateFundManagerDto) {
    return this.fundManagerService.create(createFundManagerDto);
  }

  @Get()
  findAll() {
    return this.fundManagerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fundManagerService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFundManagerDto: UpdateFundManagerDto,
  ) {
    return this.fundManagerService.update(+id, updateFundManagerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fundManagerService.remove(+id);
  }
}
