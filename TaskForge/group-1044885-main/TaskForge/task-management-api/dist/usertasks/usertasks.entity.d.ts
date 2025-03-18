import { User } from 'src/users/users.entity';
import { Tasks } from 'src/tasks/tasks.entity';
export declare class Usertasks {
    constructor(user_id: number, tasks_id: number);
    user_task_id: number;
    assigned_at: Date;
    user_id: number;
    tasks_id: number;
    user: User;
    tasks: Tasks;
}
