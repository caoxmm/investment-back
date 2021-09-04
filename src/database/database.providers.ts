import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(process.env.DB_URL, {
        user: process.env.DB_USERNAME,
        pass: process.env.DB_PASSWORD,
        dbName: process.env.DB_NAME,
      }),
  },
];
