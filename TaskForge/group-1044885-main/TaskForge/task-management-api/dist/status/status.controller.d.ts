import { StatusService } from './status.service';
import { CreateStatusDto, UpdateStatusDto } from './status.dto';
export declare class StatusController {
    private statusService;
    constructor(statusService: StatusService);
    create(createstatusDto: CreateStatusDto): Promise<import("./status.entity").Status>;
    findAll(): Promise<import("./status.entity").Status[]>;
    findUser(id: number): Promise<import("./status.entity").Status>;
    update(id: number, updateStatusDto: UpdateStatusDto): Promise<void>;
    remove(id: number): Promise<void>;
}
