import { Document } from 'mongoose';

export interface FundManager extends Document {
  readonly name: string;
  readonly historyYearGrowth: number; // 历史业绩
  readonly years: number; // 从业年限
  readonly fundAssets: number; // 管理金额
  readonly company: string; // 基金公司
  readonly fund: string; // 在管基金
  readonly expertType: string; // 擅长基金类型
  readonly investStyle: string; // 投资风格
}
