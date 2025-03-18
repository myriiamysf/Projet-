import { Tasks } from 'src/tasks/tasks.entity';
export declare class Status {
    constructor(status_name: string);
    status_id: number;
    status_name: string;
    task: Tasks[];
}
