import { FlagService } from './flag.service';
export declare class FlagController {
    private readonly FlagService;
    constructor(FlagService: FlagService);
    index(): Promise<void>;
}
