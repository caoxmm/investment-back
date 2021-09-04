import { Document } from 'mongoose';
import { User } from '../entities/user.entity';

export interface UserDoc extends Document, User {}
