import { Usertasks } from 'src/usertasks/usertasks.entity';
export declare class User {
    constructor(username: string, email: string, password: string);
    user_id: number;
    username: string;
    email: string;
    password: string;
    updated_at: Date;
    created_at: Date;
    user_task: Usertasks[];
}
