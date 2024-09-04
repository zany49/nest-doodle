import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';
import { error } from 'console';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Res() res: Response,@Body() createUserDto: CreateUserDto) {
    try{
      const userCreateRes = await this.usersService.create(createUserDto);

      return res.status(HttpStatus.OK).json({
        statusCode: 200,
        message: 'User has been created successfully',
        userCreateRes
      })
    }catch(err){
      console.log(err);
      return res.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error While creating user',
        error:err
      })
    }
  }

  @Get()
  async findAll(@Res() res: Response) {
    try{
      const userRes = await this.usersService.findAll();

      return res.status(HttpStatus.OK).json({
        statusCode: 200,
        message: 'User List Has Been Fetched successfully',
        userRes
      })
    }catch(err){
      console.log(err);
      return res.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error While Fetching User List',
        error:err
      })
    }
  }

  @Get(':id')
  async findOne(@Res() res:Response,@Param('id') id: string) {
    try{
      const userRes = await this.usersService.findOne(id);

      return res.status(HttpStatus.OK).json({
        statusCode: 200,
        message: 'User Data Has Been Fetched successfully',
        userRes
      })
    }catch(err){
      console.log(err);
      return res.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error While Fetching User Data',
        error:err
      })
    }
  }

  @Patch(':id')
  async update(@Res() res:Response ,@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    try{
      const userRes = await this.usersService.update(id,updateUserDto);

      return res.status(HttpStatus.OK).json({
        statusCode: 200,
        message: 'User Data Has Been Updated successfully',
        userRes
      })
    }catch(err){
      console.log(err);
      return res.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error While Updating User Data',
        error:err
      })
    }
  }

  @Delete(':id')
  async remove(@Res() res:Response ,@Param('id') id: string) {

    try{
      const userRes = await this.usersService.remove(id);
      return res.status(HttpStatus.OK).json({
        statusCode: 200,
        message: 'User Data Has Been Deleted successfully',
        userRes
      })
    }catch(err){
      console.log(err);
      return res.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error While Deleting User Data',
        error:err
      })
    }
  }
}
