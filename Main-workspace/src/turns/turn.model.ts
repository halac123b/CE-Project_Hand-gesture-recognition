import * as mongoose from 'mongoose';

export const Turnschema = new mongoose.Schema({
  urlimg: String,
  Status:   Boolean,
  Response : Boolean,
  createAt: { type: Date, default: Date.now },


});
export interface Turn {
        id: string;
        urlimg: string;
        Status: Boolean;
        Response : Boolean;
        createAt: Date;
}



