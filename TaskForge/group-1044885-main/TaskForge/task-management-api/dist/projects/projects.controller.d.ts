import { ProjectsService } from './projects.service';
import { CreateProjectDto, UpdateProjectDto } from './projects.dto';
export declare class ProjectsController {
    private projectService;
    constructor(projectService: ProjectsService);
    create(createprojectDto: CreateProjectDto): Promise<import("./projects.entity").Project>;
    findAll(): Promise<import("./projects.entity").Project[]>;
    findproject(id: number): Promise<import("./projects.entity").Project>;
    update(id: number, updateProjectDto: UpdateProjectDto): Promise<void>;
    remove(id: number): Promise<void>;
}
