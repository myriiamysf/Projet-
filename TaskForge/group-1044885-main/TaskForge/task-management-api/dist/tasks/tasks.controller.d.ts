import { TasksService } from './tasks.service';
import { CreateTasksDto, UpdateTasksDto } from './tasks.dto';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    create(createtasksDto: CreateTasksDto): Promise<import("./tasks.entity").Tasks>;
    findAll(): Promise<import("./tasks.entity").Tasks[]>;
    findByStatus(status_id: number): Promise<import("./tasks.entity").Tasks[]>;
    findByProject(project_id: number): Promise<import("./tasks.entity").Tasks[]>;
    findbydate(due_date: string): Promise<import("./tasks.entity").Tasks[]>;
    findTasks(id: number): Promise<import("./tasks.entity").Tasks>;
    update(id: number, updateTasksDto: UpdateTasksDto): Promise<void>;
    remove(id: number): Promise<void>;
}
