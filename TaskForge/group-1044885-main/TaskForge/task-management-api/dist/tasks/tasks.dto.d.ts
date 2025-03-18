export declare class CreateTasksDto {
    title: string;
    description: string;
    priority: string;
    due_date: string;
    project_id: number;
    status_id: number;
}
export declare class UpdateTasksDto {
    status_name: string;
    description: string;
    priority: string;
    due_date: any;
    project_id: any;
}
