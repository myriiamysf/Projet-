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
exports.UsertasksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const usertasks_entity_1 = require("./usertasks.entity");
const typeorm_2 = require("typeorm");
let UsertasksService = class UsertasksService {
    constructor(usertasksRepository) {
        this.usertasksRepository = usertasksRepository;
    }
    createUsertasks(createUsertasksDto) {
        let usertasks = new usertasks_entity_1.Usertasks(createUsertasksDto.user_id, createUsertasksDto.tasks_id);
        return this.usertasksRepository.save(usertasks);
    }
    async findAll() {
        return this.usertasksRepository.find();
    }
    findUsertasks(user_task_id) {
        return this.usertasksRepository.findOne({ where: { user_task_id } });
    }
    async findByUser(user_id) {
        return this.usertasksRepository.find({ where: { user_id } });
    }
    async updateUsertasks(user_task_id, updateUsertasks) {
        let upId = await this.usertasksRepository.findOne({ where: { user_task_id } });
        this.usertasksRepository.save({ ...upId, ...updateUsertasks });
    }
    async remove(id) {
        await this.usertasksRepository.delete(id);
    }
};
exports.UsertasksService = UsertasksService;
exports.UsertasksService = UsertasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(usertasks_entity_1.Usertasks)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsertasksService);
//# sourceMappingURL=usertasks.service.js.map