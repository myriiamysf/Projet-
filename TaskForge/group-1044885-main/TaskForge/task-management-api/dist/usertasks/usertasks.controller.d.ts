import { UsertasksService } from './usertasks.service';
import { CreateUsertasksDto, UpdateUsertasksDto } from './usertasks.dto';
export declare class UsertasksController {
    private usertasksService;
    constructor(usertasksService: UsertasksService);
    create(createUsertasksDto: CreateUsertasksDto): Promise<import("./usertasks.entity").Usertasks>;
    findAll(): Promise<import("./usertasks.entity").Usertasks[]>;
    findUsertasks(id: number): Promise<import("./usertasks.entity").Usertasks>;
    findByUser(user_id: number): Promise<import("./usertasks.entity").Usertasks[]>;
    update(id: number, updateUsertasksDto: UpdateUsertasksDto): Promise<void>;
    remove(id: number): Promise<void>;
}
