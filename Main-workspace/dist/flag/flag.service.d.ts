import { Model } from 'mongoose';
import { Flag } from './flag.model';
export declare class FlagService {
    private readonly FlagModel;
    private Flags;
    constructor(FlagModel: Model<Flag>);
    insertFlag(Flagcheck: Boolean, Response: Boolean): Promise<string>;
    editFlag(id: string, Flagcheck: Boolean, Response: Boolean): Promise<void>;
    getSingFlag(FlagId: string): Promise<{
        Flagcheck: Boolean;
        Response: Boolean;
        id: any;
    }>;
    deleteFlag(FlagId: string): Promise<void>;
    getFlags(): Promise<{
        Flagcheck: Boolean;
        Response: Boolean;
        id: any;
    }[]>;
}
