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
exports.Usertasks = void 0;
const typeorm_1 = require("typeorm");
const users_entity_1 = require("../users/users.entity");
const tasks_entity_1 = require("../tasks/tasks.entity");
let Usertasks = class Usertasks {
    constructor(user_id, tasks_id) {
        this.user_id = user_id,
            this.tasks_id = tasks_id;
    }
};
exports.Usertasks = Usertasks;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Usertasks.prototype, "user_task_id", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Usertasks.prototype, "assigned_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Usertasks.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Usertasks.prototype, "tasks_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.User, (user) => user.user_task, { cascade: true, eager: true }),
    (0, typeorm_1.JoinColumn)([
        { name: "user_id", referencedColumnName: "user_id" },
    ]),
    __metadata("design:type", users_entity_1.User)
], Usertasks.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tasks_entity_1.Tasks, (task) => task.user_task, { cascade: true, eager: true }),
    (0, typeorm_1.JoinColumn)([
        { name: "tasks_id", referencedColumnName: "tasks_id" },
    ]),
    __metadata("design:type", tasks_entity_1.Tasks)
], Usertasks.prototype, "tasks", void 0);
exports.Usertasks = Usertasks = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Number, Number])
], Usertasks);
//# sourceMappingURL=usertasks.entity.js.map