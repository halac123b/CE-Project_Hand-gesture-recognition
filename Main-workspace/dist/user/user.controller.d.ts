import { User } from './user.model';
import { UserService } from './user.service';
import { Response } from 'express';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    index(): Promise<{
        userlist: {
            username: string;
            password: string;
            updateAt: Date;
            id: any;
        }[];
    }>;
    add(user: User, res: Response): Promise<any>;
    checkId(id: string): Promise<{
        status: string;
    }>;
    edit(user: User, res: Response): Promise<any>;
    delete(user: User, res: Response): Promise<any>;
}
