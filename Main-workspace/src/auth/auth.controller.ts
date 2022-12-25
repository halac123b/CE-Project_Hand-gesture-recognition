// import { User } from './../../models/user.entity';
import { Request, Response } from 'express';
import {
  Controller,
  Get,
  Render,
  UseGuards,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';


@Controller()
export class AuthController {
  constructor(private jwtService: JwtService , private userService: UserService) {}

  @Get('login')
  @Render("login")
  async loginPage(@Req() req: Request) {
    const message = req.query['message'];
    const viewBag = {
        message: message
    }
    return viewBag;
}

@Post('login')
 @UseGuards(AuthGuard('local')) //Guard là function validate trong file local.strategy.ts
async login(@Req() req: Request, @Res() res: Response) {
    const signedInfo: Object = req.user;
    // console.log(signedInfo);
    //console.log(signedInfo["email"])
    let username: string = req.user["username"] as string;
    let user;
    let student = await this.userService.getUsers();
    for (var i = 0 ; i < student.length ; i++){
        if (student[i].username == username) {
            user = student[i];
        }
    }

    // Cookies
    const accessToken = this.jwtService.sign(signedInfo);
    res.cookie('LB', accessToken);
    res.redirect('admin');
}

  @Get('logout')
  async logout(@Req() req: Request, @Res() res: Response) {
    res.clearCookie('LB');
    return res.redirect('/login');
  }
}
