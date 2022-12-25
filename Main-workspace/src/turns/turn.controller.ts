import { Body, Controller, Get, Post, Render, Req, Res, UseGuards } from '@nestjs/common';
import { TurnService } from './turn.service';
import { FlagService } from '../flag/flag.service';
import { Request, Response } from 'express';
import { AuthGuard } from '@nestjs/passport';

@Controller('admin')
export class TurnController {
  constructor(private readonly turnService: TurnService,private readonly FlagService: FlagService) {}
    @Get()
    @UseGuards(AuthGuard('jwt'))
    @Render('turn/index')
    async index() {
      // await this.turnService.insertTurn("2243255","ab",true);

    }
    @Post('/getdata')
    @UseGuards(AuthGuard('jwt'))
    async getdata2() { 
      var listflag = await this.FlagService.getFlags();
      var list =  await this.turnService.getTurns();
      var index = list.length;
      var index1 = listflag.length;
      // console.log(list[index-1].urlimg);
      return {
        list: list[index-1],
        flag:  listflag[index1-1]
    }
  }
  @Post('/confirm')
  @UseGuards(AuthGuard('jwt'))
  async confirm(@Res() res: Response) { 
    // console.log(id);
    var listflag = await this.FlagService.getFlags();
    var list =  await this.turnService.getTurns();
    var index = list.length;
    var index1 = listflag.length;
    await this.FlagService.editFlag(listflag[index1-1].id , false , true );
    await this.turnService.editTurn(list[index-1].id, list[index-1].urlimg, list[index-1].Status, true); 
    res.redirect('/admin');
  }
  @Post('/refuse')
  @UseGuards(AuthGuard('jwt'))
  async refuse(@Res() res: Response) { 
    // console.log(id);
    var listflag = await this.FlagService.getFlags();
    var list =  await this.turnService.getTurns();
    var index = list.length;
    var index1 = listflag.length;
    await this.FlagService.editFlag(listflag[index1-1].id , false , false );
    await this.turnService.editTurn(list[index-1].id, list[index-1].urlimg, list[index-1].Status, false);
    res.redirect('/admin');
  }
}
    

