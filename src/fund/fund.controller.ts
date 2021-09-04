import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FundService } from './fund.service';
import { CreateFundDto } from './dto/create-fund.dto';
import { UpdateFundDto } from './dto/update-fund.dto';

const https = require('https');

@Controller('fund')
export class FundController {
  constructor(private readonly fundService: FundService) {}

  @Post()
  create(@Body() createFundDto: CreateFundDto) {
    return this.fundService.create(createFundDto);
  }

  @Get()
  findAll() {
    https
      .get(
        'https://www.jisilu.cn/data/lof/index_lof_list/?___jsl=LST___t=1627083211332&rp=25&page=1',
        (res) => {
          const { statusCode } = res;
          const contentType = res.headers['content-type'];

          let error;
          // 任何 2xx 状态码都表示成功响应，但这里只检查 200。
          if (statusCode !== 200) {
            error = new Error(
              'Request Failed.\n' + `Status Code: ${statusCode}`,
            );
          } else if (!/^application\/json/.test(contentType)) {
            error = new Error(
              'Invalid content-type.\n' +
                `Expected application/json but received ${contentType}`,
            );
          }
          if (error) {
            console.error(error.message);
            // 消费响应数据以释放内存
            res.resume();
            return;
          }

          res.setEncoding('utf8');
          let rawData = '';
          res.on('data', (chunk) => {
            rawData += chunk;
          });
          res.on('end', () => {
            try {
              const parsedData = JSON.parse(rawData);
              console.log(parsedData);
            } catch (e) {
              console.error(e.message);
            }
          });
        },
      )
      .on('error', (e) => {
        console.error(`Got error: ${e.message}`);
      });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fundService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFundDto: UpdateFundDto) {
    return this.fundService.update(+id, updateFundDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fundService.remove(+id);
  }
}
