import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './users.dto';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("./users.entity").User>;
    findAll(): Promise<import("./users.entity").User[]>;
    findUser(id: number): Promise<import("./users.entity").User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<void>;
    remove(id: number): Promise<void>;
}
