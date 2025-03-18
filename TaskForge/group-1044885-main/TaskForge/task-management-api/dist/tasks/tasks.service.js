"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tasks_entity_1 = require("./tasks.entity");
const typeorm_2 = require("typeorm");
let TasksService = class TasksService {
    constructor(tasksRepository) {
        this.tasksRepository = tasksRepository;
    }
    createTasks(createTasksDto) {
        let tasks = new tasks_entity_1.Tasks(createTasksDto.title, createTasksDto.description, createTasksDto.priority, createTasksDto.due_date, createTasksDto.project_id, createTasksDto.status_id);
        return this.tasksRepository.save(tasks);
    }
    async findByStatus(status_id) {
        return this.tasksRepository.find({ where: { status_id } });
    }
    async findAll() {
        return this.tasksRepository.find();
    }
    async findByProject(project_id) {
        return this.tasksRepository.find({ where: { project_id } });
    }
    async findByDate(due_date) {
        return this.tasksRepository.find({ where: { due_date } });
    }
    findTasks(tasks_id) {
        return this.tasksRepository.findOne({ where: { tasks_id } });
    }
    async updateTasks(tasks_id, updateTasks) {
        let upId = await this.tasksRepository.findOne({ where: { tasks_id } });
        this.tasksRepository.save({ ...upId, ...updateTasks });
    }
    async remove(id) {
        await this.tasksRepository.delete(id);
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tasks_entity_1.Tasks)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TasksService);
//# sourceMappingURL=tasks.service.js.map