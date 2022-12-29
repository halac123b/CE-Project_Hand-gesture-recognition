import { Model } from 'mongoose';
import { Person } from './person.model';
export declare class PersonService {
    private readonly personModel;
    private persons;
    constructor(personModel: Model<Person>);
    insertPerson(Fname: string, Lname: string, Status: Boolean): Promise<string>;
    editPerson(personId: string, Fname: string, Lname: string, Status: Boolean, updateAt: Date): Promise<void>;
    getSingPerson(personId: string): Promise<{
        id: String;
        Fname: string;
        Lname: string;
        Status: Boolean;
        updateAt: Date;
    }>;
    deletePerson(personId: string): Promise<void>;
    getPersons(): Promise<{
        id: String;
        Fname: string;
        Lname: string;
        Status: Boolean;
    }[]>;
}
