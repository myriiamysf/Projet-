import { CreateProjectDto, UpdateProjectDto } from './projects.dto';
import { Project } from './projects.entity';
import { Repository } from 'typeorm';
export declare class ProjectsService {
    private projectsRepository;
    constructor(projectsRepository: Repository<Project>);
    createProject(createProjectDto: CreateProjectDto): Promise<Project>;
    findAll(): Promise<Project[]>;
    findProject(project_id: number): Promise<Project>;
    updateProject(project_id: number, updateUser: UpdateProjectDto): Promise<void>;
    remove(project_id: number): Promise<void>;
}
