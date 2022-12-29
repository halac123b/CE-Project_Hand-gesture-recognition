import { Model } from 'mongoose';
import { Turn } from './turn.model';
export declare class TurnService {
    private readonly turnModel;
    private turns;
    constructor(turnModel: Model<Turn>);
    insertTurn(urlimg: string, Status: Boolean, Response: Boolean): Promise<string>;
    editTurn(turnId: string, urlimg: string, Status: Boolean, Response: Boolean): Promise<void>;
    getSingTurn(turnId: string): Promise<{
        id: any;
        urlimg: string;
        Status: Boolean;
        Response: Boolean;
    }>;
    deleteTurn(turnId: string): Promise<void>;
    getTurns(): Promise<{
        id: any;
        urlimg: string;
        Status: Boolean;
        Response: Boolean;
        CreateAt: Date;
    }[]>;
}
