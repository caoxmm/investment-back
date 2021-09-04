import * as mongoose from 'mongoose';

export const MyFundSchema = new mongoose.Schema({
  fundId: String,
  fundNm: String,
  price: Number, // 成交单价
  amount: Number, // 份额
  total: Number, // 总价格
  applyFee: Number, // 申购费
  applyDate: Date, // 买入日期
});
