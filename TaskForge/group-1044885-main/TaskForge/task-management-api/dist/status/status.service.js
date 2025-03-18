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
exports.StatusService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const status_entity_1 = require("./status.entity");
const typeorm_2 = require("typeorm");
let StatusService = class StatusService {
    constructor(statusRepository) {
        this.statusRepository = statusRepository;
    }
    createStatus(createStatusDto) {
        let status = new status_entity_1.Status(createStatusDto.status_name);
        return this.statusRepository.save(status);
    }
    async findAll() {
        return this.statusRepository.find();
    }
    findStatus(status_id) {
        return this.statusRepository.findOne({ where: { status_id } });
    }
    async updateStatus(status_id, updateUser) {
        let upId = await this.statusRepository.findOne({ where: { status_id } });
        this.statusRepository.save({ ...upId, ...updateUser });
    }
    async remove(id) {
        await this.statusRepository.delete(id);
    }
};
exports.StatusService = StatusService;
exports.StatusService = StatusService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(status_entity_1.Status)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StatusService);
//# sourceMappingURL=status.service.js.map