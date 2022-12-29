import { TurnService } from './turn.service';
import { FlagService } from '../flag/flag.service';
import { Response } from 'express';
export declare class TurnController {
    private readonly turnService;
    private readonly FlagService;
    constructor(turnService: TurnService, FlagService: FlagService);
    index(): Promise<void>;
    getdata2(): Promise<{
        list: {
            id: any;
            urlimg: string;
            Status: Boolean;
            Response: Boolean;
            CreateAt: Date;
        };
        flag: {
            Flagcheck: Boolean;
            Response: Boolean;
            id: any;
        };
    }>;
    confirm(res: Response): Promise<void>;
    refuse(res: Response): Promise<void>;
}
