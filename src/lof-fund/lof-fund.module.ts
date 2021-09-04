import { Module } from '@nestjs/common';
import { LofFundService } from './lof-fund.service';
import { LofFundController } from './lof-fund.controller';

@Module({
  controllers: [LofFundController],
  providers: [LofFundService],
})
export class LofFundModule {
  fundId: string;
  fundNm: string;
  assetRatio: string; // ?
  price: string; // 单价
  priceDt: string; // 价格日期
  increaseRt: string; // 涨幅
  volume: string; // 成交(万元)
  stockVolume: string;
  lastTime: string;
  amount: number; // 场内份额(万份)
  amountIncr: string; // 场内新增
  amountIncreaseRt: string; // 场内新增率
  fundNav: string; // 基金净值
  navDt: string; // 净值日期
  estimateValue: string; // 实时估值
  estValDt: string; // 估值日期
  lastEstTime: string; // 最新估值时间
  discountRt: string; // 溢价率
  indexId: string; // 跟踪指数id
  indexNm: string; // 跟踪指数
  indexIncreaseRt: string; // 指数涨幅
  idxPriceDt: string; // 指数涨幅日期
  applyFee: string; // 申购费
  applyFeeTips: string;
  redeemFee: string; // 赎回费
  redeemFeeTips: string;
  applyStatus: string; // 申购状态
  redeemStatus: string; // 赎回状态
  issuerNm: string; // 基金公司
  urls: string; // 指数地址
  applyRedeemStatus: string; // 申赎状态
  amountIncrTips: string; // 场内份额，增长份额提示
  turnoverRt: string; // 换手率
}
