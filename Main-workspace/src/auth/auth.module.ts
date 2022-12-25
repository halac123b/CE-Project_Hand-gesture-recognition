import { MongooseModule } from '@nestjs/mongoose';

import { ConfigModule } from '@nestjs/config';

import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';

import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.trategy';
import { UserService } from 'src/user/user.service';
import { userSchema } from 'src/user/user.model';
import * as dotenv from "dotenv";

dotenv.config({ path: __dirname+'/.env' });
@Module({
  imports: [
    PassportModule,
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{name: 'Users', schema: userSchema}]),
    JwtModule.register({
      secret: "secret",
      signOptions: {
        expiresIn: 60 * 30,
      },
    }),
    MongooseModule.forFeature([{name: 'Users', schema: userSchema}]),
  ],
  providers: [JwtStrategy,UserService,LocalStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
