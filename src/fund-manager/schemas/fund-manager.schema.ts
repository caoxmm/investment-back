import * as mongoose from 'mongoose';

export const FundManagerSchema = new mongoose.Schema({
  name: String,
  historyYearGrowth: Number, // 历史业绩
  years: Number, // 从业年限
  fundAssets: Number, // 管理金额
  company: String, // 基金公司
  fund: String, // 在管基金
  expertType: String, // 擅长基金类型
  investStyle: String, // 投资风格
});
