import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LofFundService } from './lof-fund.service';

@Controller('lof-fund')
export class LofFundController {
  constructor(private readonly lofFundService: LofFundService) {}

  @Get('index')
  findAllIndex() {
    return this.lofFundService.findAllIndex();
  }

  @Get('stock')
  findAllStock() {
    return this.lofFundService.findAllStock();
  }
}
