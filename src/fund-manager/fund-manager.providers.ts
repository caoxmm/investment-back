import { Connection } from 'mongoose';
import { FundManagerSchema } from './schemas/fund-manager.schema';

export const fundManagersProviders = [
  {
    provide: 'FUND_MANAGER_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('FundManager', FundManagerSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
