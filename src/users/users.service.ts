import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { UserDocuments,Users } from 'src/schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class UsersService {
  constructor(@InjectModel('Users') private userModel :Model<UserDocuments>){}
  
  async create(createUserDto: CreateUserDto):Promise<UserDocuments> {
    const user =  new this.userModel(createUserDto)
    return await user.save();
  }

  async findAll():Promise<UserDocuments[]> {
    const allUsers = await this.userModel.find()
    return allUsers;
  }

  async findOne(id: string):Promise<UserDocuments> {
    const allUsers = await this.userModel.findById(id)
    return allUsers;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const updateUsers = await this.userModel.findByIdAndUpdate(id,updateUserDto)
    // const user = await this.userModel.findById(id)
    return updateUsers
  }

  async remove(id: string) {
    const deletedUsers = await this.userModel.findByIdAndDelete(id)

    return deletedUsers;
  }
}
