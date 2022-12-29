import * as mongoose from 'mongoose';
export declare const userSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, {}>;
export interface User extends mongoose.Document {
    username: string;
    password: string;
    updateAt: Date;
}
