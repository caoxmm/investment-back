import { Connection } from 'mongoose';
import { UserSchema } from './schemas/user.schema';

export const userProviders = [
  {
    provide: 'MY_USER_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('user', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
