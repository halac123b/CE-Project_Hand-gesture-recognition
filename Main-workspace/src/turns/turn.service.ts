
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Model, Schema } from 'mongoose';
import { Turn } from './turn.model';

@Injectable()
export class TurnService {
  private turns: Turn[] = [];

  constructor(
    @InjectModel('turns') private readonly turnModel: Model<Turn>,
  ) { }

  async insertTurn(urlimg: string, Status: Boolean, Response: Boolean) {
    const newTurn = new this.turnModel({
      urlimg,
      Status,
      Response,
    });
    const result = await newTurn.save();
    return result.id as string;
  }

  async editTurn(
    turnId: string,
    urlimg: string,
    Status: Boolean,
    Response: Boolean,
  ) {
    const update = await this.turnModel.findById(turnId);
    update.Status = Status;
    update.urlimg = urlimg;
    update.Response = Response;
    update.save();
  }
  async getSingTurn(turnId: string) {
    const result = await this.turnModel.findById(turnId);
    return {
      id: result.id,
      urlimg: result.urlimg,
      Status: result.Status,
      Response: result.Response,
    }
  }

  async deleteTurn(turnId: string) {
    await this.turnModel.deleteOne({ _id: turnId }).exec();
  }
  async getTurns() {
    const turns = await this.turnModel.find().exec();
    //console.log(result);
    return turns.map((prod) => ({
      id: prod.id,
      urlimg: prod.urlimg,
      Status: prod.Status,
      Response: prod.Response,
      CreateAt: prod.createAt,
    }));
  }
}
