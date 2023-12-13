import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async signIn(email, pass) {
        const user = await this.usersService.findOne(email);

        const isPasswordValid = await bcrypt.compare(pass, user.password)
        if (!isPasswordValid) {
            throw new UnauthorizedException();
        }
        const payload = { sub: user.id };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
