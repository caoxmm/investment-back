import { Document } from 'mongoose';
import { MyFund } from '../entities/my-fund.entity';

export interface MyDocFund extends Document, MyFund {}
