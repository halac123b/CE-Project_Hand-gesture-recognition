import * as mongoose from 'mongoose';
export declare const Flagschema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, {}>;
export interface Flag extends mongoose.Document {
    Flagcheck: Boolean;
    Response: Boolean;
}
