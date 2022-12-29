import * as mongoose from 'mongoose';
export declare const Turnschema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, {}>;
export interface Turn {
    id: string;
    urlimg: string;
    Status: Boolean;
    Response: Boolean;
    createAt: Date;
}
