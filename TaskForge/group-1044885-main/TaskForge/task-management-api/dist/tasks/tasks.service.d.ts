import { CreateTasksDto, UpdateTasksDto } from './tasks.dto';
import { Tasks } from './tasks.entity';
import { Repository } from 'typeorm';
export declare class TasksService {
    private tasksRepository;
    constructor(tasksRepository: Repository<Tasks>);
    createTasks(createTasksDto: CreateTasksDto): Promise<Tasks>;
    findByStatus(status_id: number): Promise<Tasks[]>;
    findAll(): Promise<Tasks[]>;
    findByProject(project_id: number): Promise<Tasks[]>;
    findByDate(due_date: string): Promise<Tasks[]>;
    findTasks(tasks_id: number): Promise<Tasks>;
    updateTasks(tasks_id: number, updateTasks: UpdateTasksDto): Promise<void>;
    remove(id: number): Promise<void>;
}
