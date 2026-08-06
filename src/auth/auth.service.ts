import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from 'node_modules/@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'node_modules/typeorm';

import * as bcrypt from 'bcrypt';  
import { LoginUserDto, CreateUserDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto) {
    
    try {

      const{password, ...userData} = createUserDto;

      const user = this.userRepository.create({
        ...userData,
        password: bcrypt.hashSync(password, 10)
      });


      await this.userRepository.save(user)
      delete (user as any).password;

      return user;
      //TODO: Retornar el jwt de acceso

    } catch (error) {
     this.handleDBErrors(error);
    }
  }

  async login(loginUserDto: LoginUserDto) {
   
    const {password, email} = loginUserDto;

    const user = await this.userRepository.findOne({
      where: { email },
      select: { password: true, email: true}
    });

    if(!user)
      throw new BadRequestException('Credentials are not valid (email)');

    const isMatch = bcrypt.compareSync(password, user.password);

    if(!isMatch)
      throw new BadRequestException('Credentials are not valid (password)');

    delete (user as any).password;
    return user;
    //TODO: Retornar el jwt de acceso

  }

  private handleDBErrors(error: any): never {
    if (error.code === '23505') 
      throw new BadRequestException(error.detail);

      console.log(error);

      throw new InternalServerErrorException('Please check server logs');
    
  }



}
