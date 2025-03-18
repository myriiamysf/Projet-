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
exports.UsertasksController = void 0;
const common_1 = require("@nestjs/common");
const usertasks_service_1 = require("./usertasks.service");
const usertasks_dto_1 = require("./usertasks.dto");
let UsertasksController = class UsertasksController {
    constructor(usertasksService) {
        this.usertasksService = usertasksService;
    }
    async create(createUsertasksDto) {
        return this.usertasksService.createUsertasks(createUsertasksDto);
    }
    async findAll() {
        return this.usertasksService.findAll();
    }
    async findUsertasks(id) {
        return this.usertasksService.findUsertasks(id);
    }
    async findByUser(user_id) {
        return this.usertasksService.findByUser(user_id);
    }
    update(id, updateUsertasksDto) {
        return this.usertasksService.updateUsertasks(id, updateUsertasksDto);
    }
    remove(id) {
        return this.usertasksService.remove(id);
    }
};
exports.UsertasksController = UsertasksController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [usertasks_dto_1.CreateUsertasksDto]),
    __metadata("design:returntype", Promise)
], UsertasksController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsertasksController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsertasksController.prototype, "findUsertasks", null);
__decorate([
    (0, common_1.Get)('/user/:user_id'),
    __param(0, (0, common_1.Param)('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsertasksController.prototype, "findByUser", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, usertasks_dto_1.UpdateUsertasksDto]),
    __metadata("design:returntype", void 0)
], UsertasksController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsertasksController.prototype, "remove", null);
exports.UsertasksController = UsertasksController = __decorate([
    (0, common_1.Controller)('usertasks'),
    __metadata("design:paramtypes", [usertasks_service_1.UsertasksService])
], UsertasksController);
//# sourceMappingURL=usertasks.controller.js.map