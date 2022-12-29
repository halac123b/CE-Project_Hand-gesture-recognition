import * as mongoose from 'mongoose';
export declare const Personschema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, {}>;
export interface Person extends mongoose.Document {
    id: String;
    Fname: string;
    Lname: string;
    Status: Boolean;
    createAt: Date;
    updateAt: Date;
}
