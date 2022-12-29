import { Model } from 'mongoose';
import { User } from './user.model';
export declare class UserService {
    private readonly userModel;
    private Users;
    constructor(userModel: Model<User>);
    insertUser(usernamee: string, password: string): Promise<string>;
    editUser(id: string, username: string, password: string): Promise<void>;
    getSingUser(UserId: string): Promise<{
        username: string;
        password: string;
        updateAt: Date;
        id: any;
    }>;
    deleteUser(UserId: string): Promise<void>;
    getUsers(): Promise<{
        username: string;
        password: string;
        updateAt: Date;
        id: any;
    }[]>;
}
