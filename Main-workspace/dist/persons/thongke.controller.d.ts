import { TurnService } from 'src/turns/turn.service';
import { PersonService } from './person.service';
export declare class ThongkeController {
    private readonly personService;
    private readonly turnService;
    constructor(personService: PersonService, turnService: TurnService);
    index(): Promise<{
        totalofturn: number;
        totalinday: number;
        totalla: number;
        totalquen: number;
        percentquen: number;
        percentla: number;
    }>;
    getdata2(id: string): Promise<{
        list: {
            id: any;
            urlimg: string;
            Status: Boolean;
            Response: Boolean;
            CreateAt: Date;
        }[];
    }>;
}
