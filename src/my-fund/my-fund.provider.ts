import { Connection } from 'mongoose';
import { MyFundSchema } from './schemas/my-fund.schema';

export const myFundProviders = [
  {
    provide: 'MY_FUND_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('MyFund', MyFundSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
