import { CreateUsertasksDto, UpdateUsertasksDto } from './usertasks.dto';
import { Usertasks } from './usertasks.entity';
import { Repository } from 'typeorm';
export declare class UsertasksService {
    private usertasksRepository;
    constructor(usertasksRepository: Repository<Usertasks>);
    createUsertasks(createUsertasksDto: CreateUsertasksDto): Promise<Usertasks>;
    findAll(): Promise<Usertasks[]>;
    findUsertasks(user_task_id: number): Promise<Usertasks>;
    findByUser(user_id: number): Promise<Usertasks[]>;
    updateUsertasks(user_task_id: number, updateUsertasks: UpdateUsertasksDto): Promise<void>;
    remove(id: number): Promise<void>;
}
