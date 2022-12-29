import { TurnService } from 'src/turns/turn.service';
import { PersonService } from './person.service';
export declare class AllhistoryController {
    private readonly personService;
    private readonly turnService;
    constructor(personService: PersonService, turnService: TurnService);
    index(): Promise<{
        list: {
            id: any;
            urlimg: string;
            Status: Boolean;
            Response: Boolean;
            CreateAt: Date;
        }[];
    }>;
}
