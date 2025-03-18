import { CreateStatusDto, UpdateStatusDto } from './status.dto';
import { Status } from './status.entity';
import { Repository } from 'typeorm';
export declare class StatusService {
    private statusRepository;
    constructor(statusRepository: Repository<Status>);
    createStatus(createStatusDto: CreateStatusDto): Promise<Status>;
    findAll(): Promise<Status[]>;
    findStatus(status_id: number): Promise<Status>;
    updateStatus(status_id: number, updateUser: UpdateStatusDto): Promise<void>;
    remove(id: number): Promise<void>;
}
