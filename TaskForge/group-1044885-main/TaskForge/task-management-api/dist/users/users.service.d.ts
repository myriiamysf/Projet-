import { CreateUserDto, UpdateUserDto } from './users.dto';
import { User } from './users.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findUser(user_id: number): Promise<User>;
    updateUser(user_id: number, updateUser: UpdateUserDto): Promise<void>;
    remove(id: number): Promise<void>;
}
