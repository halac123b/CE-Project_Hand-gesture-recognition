import { TurnService } from 'src/turns/turn.service';
import { PersonService } from './person.service';
export declare class PersonController {
    private readonly personService;
    private readonly turnService;
    constructor(personService: PersonService, turnService: TurnService);
    index(): Promise<{
        totalofturn: number;
        totalinday: number;
        totalla: number;
        totalquen: number;
    }>;
}
