import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDoc } from 'src/users/interfaces/user.interface';
import { UsersService, validatePassword } from 'src/users/users.service';
import { AuthLoginDto } from './dto/auth-login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(authLoginDto: AuthLoginDto) {
    const user = await this.validateUser(authLoginDto);

    const payload = {
      userId: user.id,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(authLoginDto: AuthLoginDto): Promise<UserDoc> {
    const { email, password } = authLoginDto;

    const user = await this.usersService.findByEmail(email);
    if (!(await validatePassword(password, user.password))) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
