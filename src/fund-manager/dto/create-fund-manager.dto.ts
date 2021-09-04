export class CreateFundManagerDto {
  name: string;
  historyYearGrowth: number; // 历史业绩
  years: number; // 从业年限
  fundAssets: number; // 管理金额
  company: string; // 基金公司
  fund: string; // 在管基金
  expertType: string; // 擅长基金类型
  investStyle: string; // 投资风格
}
