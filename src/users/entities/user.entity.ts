import * as bcrypt from 'bcryptjs';

export class User {
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;

  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 8);
  }

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}
