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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
const typeorm_1 = require("typeorm");
const tasks_entity_1 = require("../tasks/tasks.entity");
let Status = class Status {
    constructor(status_name) {
        this.status_name = status_name;
    }
};
exports.Status = Status;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Status.prototype, "status_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Status.prototype, "status_name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => tasks_entity_1.Tasks, (tasks) => tasks.status),
    __metadata("design:type", Array)
], Status.prototype, "task", void 0);
exports.Status = Status = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String])
], Status);
//# sourceMappingURL=status.entity.js.map