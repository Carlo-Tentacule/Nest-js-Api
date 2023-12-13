import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  // Old Post Create User

  // create(createUserDto: CreateUserDto) {
  //   return this.usersRepository.save(createUserDto)
  // }

  //Asynchrone

  async create(createUserDto: CreateUserDto | UpdateUserDto): Promise<User> {
    const { password, ...rest } = createUserDto;
    const hashedPassword = await this.hashPassword(password);
    const user = this.usersRepository.create({
      ...rest,
      password: hashedPassword,
    });
    return this.usersRepository.save(user);
  }

  private async hashPassword(password: string): Promise<string> {
    var salt = bcrypt.genSaltSync(10);
    var hashedPassword = bcrypt.hashSync(password, salt);
    return hashedPassword;
  }

  //Synchrone

  // create(createUserDto: CreateUserDto | UpdateUserDto) {
  //   const { password, ...rest } = createUserDto;
  //   const hashedPassword = this.hashPassword(password);
  //   const user = this.usersRepository.create({
  //     ...rest,
  //     password: hashedPassword,
  //   });
  //   return this.usersRepository.save(user);
  // }

  // private hashPassword(password: string) {
  //   var salt = bcrypt.genSaltSync(10);
  //   var hashedPassword = bcrypt.hashSync(password, salt);
  //   return hashedPassword;
  // }

  findAll() {
    return this.usersRepository.find()
  }

  findOne(email: string) {
    return this.usersRepository.findOneBy({ email: email })
  }

  // update(id: string, updateUserDto: UpdateUserDto) {
  //   return this.usersRepository.update(id, updateUserDto)
  // }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(
      id,
      await this.create(updateUserDto)
    )
  }


  remove(id: number) {
    return this.usersRepository.delete(id)
  }
}
