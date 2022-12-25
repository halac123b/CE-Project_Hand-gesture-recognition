import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './persons/person.module';
import { TurnModule } from './turns/turn.module';
import { FlagModule } from './flag/flag.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { UnauthorizedExceptionFilter } from './filters/unauthorized-exception.filter';
import { APP_FILTER } from '@nestjs/core';



@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://halac123b:hapass2a@cluster0.lieodwt.mongodb.net/handRecognition?retryWrites=true&w=majority'),
  PersonModule,TurnModule,FlagModule,UserModule,AuthModule],
  controllers: [AppController],  
  providers: [AppService ,{
    provide: APP_FILTER,
    useClass: UnauthorizedExceptionFilter
  },],
})
export class AppModule {}