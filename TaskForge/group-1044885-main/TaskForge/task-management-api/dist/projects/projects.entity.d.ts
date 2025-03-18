import { Tasks } from 'src/tasks/tasks.entity';
export declare class Project {
    constructor(name: string, description: string);
    project_id: number;
    name: string;
    description: string;
    updated_at: Date;
    created_at: Date;
    task: Tasks[];
}
