import { Project } from 'src/projects/projects.entity';
import { Status } from 'src/status/status.entity';
import { Usertasks } from 'src/usertasks/usertasks.entity';
export declare class Tasks {
    constructor(title: string, description: string, priority: string, due_date: string, project_id: number, status_id: number);
    tasks_id: number;
    title: string;
    description: string;
    priority: string;
    project_id: number;
    status_id: number;
    due_date: string;
    created_at: Date;
    updated_at: Date;
    project: Project;
    status: Status;
    user_task: Usertasks[];
}
