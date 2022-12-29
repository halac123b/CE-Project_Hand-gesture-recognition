import { TurnService } from 'src/turns/turn.service';
import { PersonService } from './person.service';
export declare class HistoryController {
    private readonly personService;
    private readonly turnService;
    constructor(personService: PersonService, turnService: TurnService);
    index(): Promise<{
        list: any[];
    }>;
}
