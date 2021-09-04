import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDoc } from './interfaces/user.interface';
import * as bcrypt from 'bcryptjs';
export async function hashPassword(password: string) {
  return await bcrypt.hash(password, 8);
}

export async function validatePassword(s: string, h: string): Promise<boolean> {
  return bcrypt.compare(s, h);
}
@Injectable()
export class UsersService {
  constructor(
    @Inject('MY_USER_MODEL')
    private userModel: Model<UserDoc>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    createUserDto.password = await hashPassword(createUserDto.password);
    const user = new this.userModel(createUserDto);
    await user.save();
    delete user.password;
    return user;
  }

  findAll() {
    return this.userModel.find().exec();
  }

  findOne(id: string) {
    return this.userModel.find({ _id: id }).exec();
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.updateOne({ _id: id }, updateUserDto);
  }

  remove(id: string) {
    return this.userModel.remove({ _id: id });
  }

  async showById(id: string): Promise<UserDoc> {
    const user = await this.userModel.findOne({ _id: id });

    delete user.password;
    return user;
  }

  async findById(id: string) {
    return await this.userModel.findOne({ _id: id });
  }

  async findByEmail(email: string) {
    return await this.userModel.findOne({
      email: email,
    });
  }
}
