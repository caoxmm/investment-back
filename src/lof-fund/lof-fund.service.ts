import { LFUCache } from './../utils/lfuCache/lfuCache';
import { Injectable } from '@nestjs/common';
import { LofFund } from './entities/lof-fund.entity';

const https = require('https');

interface ICacheData {
  time: number;
  data: LofFund[];
}

const cache = new LFUCache<ICacheData>(10);
@Injectable()
export class LofFundService {
  findAllIndex() {
    const now = new Date().getTime();
    const key = 'index';

    // const cached = cache.get(key);
    // if (cached && now - cached.time > 24 * 60 * 60 * 1000) {
    //   return Promise.resolve(cached.data);
    // }

    const indexUrl = `https://www.jisilu.cn/data/lof/index_lof_list/?___jsl=LST___t=${now}&rp=25&page=1`;
    return new Promise((resolve, reject) => {
      getData(indexUrl)
        .then((data) => {
          const usefulList = filterUseful(data);
          cache.put(key, { time: now, data: usefulList });
          resolve(usefulList);
        })
        .catch(reject);
    });
  }

  findAllStock() {
    const now = new Date().getTime();
    const key = 'stock';

    // const cached = cache.get(key);
    // if (cached && now - cached.time > 24 * 60 * 60 * 1000) {
    //   return Promise.resolve(cached.data);
    // }
    const stockUrl = `https://www.jisilu.cn/data/lof/stock_lof_list/?___jsl=LST___t=${now}&rp=25`;
    return new Promise((resolve, reject) => {
      getData(stockUrl)
        .then((data) => {
          const usefulList = filterUseful(data);
          cache.put(key, { time: now, data: usefulList });
          resolve(usefulList);
        })
        .catch(reject);
    });
  }
}
function filterUseful(parsedData: any): LofFund[] {
  const rows = parsedData?.rows as IRow[];
  const usefulRow: LofFund[] = [];
  if (rows) {
    for (const r of rows) {
      const cell = r.cell;
      if (parseFloat(cell.volume) > 1000) {
        usefulRow.push({
          fundId: cell.fund_id,
          fundNm: cell.fund_nm,
          price: cell.price,
          volume: cell.volume,
          discountRt: cell.discount_rt,
          applyFee: cell.apply_fee,
          applyFeeTips: cell.apply_fee_tips,
          redeemFee: cell.redeem_fee,
          redeemFeeTips: cell.redeem_fee_tips,
          estimateValue: cell.estimate_value,
          estimateDate: cell.est_val_dt,
          applyStatus: cell.apply_status,
          redeemStatus: cell.redeem_status,
        });
      }
    }
  }

  return usefulRow;
}

interface IRow {
  id: string;
  cell: ILofFund;
}

export interface ILofFund {
  fund_id: string;
  fund_nm: string;
  price: string;
  increase_rt: string;
  volume: string;
  stock_volume: string;
  last_time: string;
  amount: number;
  amount_incr: string;
  amount_increase_rt: string;
  fund_nav: string;
  nav_dt: string;
  estimate_value: string;
  est_val_dt: string;
  last_est_time: string;
  discount_rt: string;
  report_dt: string;
  stock_ratio: string;
  stock_amount: string;
  bond_ratio: string;
  bond_amount: string;
  all_amount: string;
  stock_increase_rt: string;
  index_increase_rt: string;
  apply_fee: string;
  apply_fee_tips: string;
  redeem_fee: string;
  redeem_fee_tips: string;
  apply_status: string;
  redeem_status: string;
  min_amt: string;
  issuer_nm: string;
  urls: string;
  notes: string;
  index_id: string;
  ratio_tips: string;
  apply_redeem_status: string;
  amount_incr_tips: string;
  turnover_rt: string;
}

export function getData(url: string) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        const { statusCode } = res;
        const contentType = res.headers['content-type'];

        let error;
        // 任何 2xx 状态码都表示成功响应，但这里只检查 200。
        if (statusCode !== 200) {
          error = new Error('Request Failed.\n' + `Status Code: ${statusCode}`);
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
            resolve(parsedData);
          } catch (e) {
            reject(e);
          }
        });
      })
      .on('error', (e) => {
        reject(e);
      });
  });
}
