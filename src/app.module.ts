import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema } from './schemas/user.schema';
import { UsersService } from './users/users.service';

// config()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB),
    MongooseModule.forFeature([
      // { name: 'Users', schema: UsersSchema }
    ]),
    UsersModule,
 ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
