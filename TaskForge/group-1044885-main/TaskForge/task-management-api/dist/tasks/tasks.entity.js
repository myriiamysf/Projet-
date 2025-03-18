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
exports.Tasks = void 0;
const typeorm_1 = require("typeorm");
const projects_entity_1 = require("../projects/projects.entity");
const status_entity_1 = require("../status/status.entity");
const usertasks_entity_1 = require("../usertasks/usertasks.entity");
let Tasks = class Tasks {
    constructor(title, description, priority, due_date, project_id, status_id) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.due_date = due_date;
        this.project_id = project_id;
        this.status_id = status_id;
    }
};
exports.Tasks = Tasks;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Tasks.prototype, "tasks_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Tasks.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Tasks.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Tasks.prototype, "priority", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Tasks.prototype, "project_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Tasks.prototype, "status_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Tasks.prototype, "due_date", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Tasks.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Tasks.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => projects_entity_1.Project, (project) => project.task, { cascade: true, eager: true }),
    (0, typeorm_1.JoinColumn)([
        { name: "project_id", referencedColumnName: "project_id" },
    ]),
    __metadata("design:type", projects_entity_1.Project)
], Tasks.prototype, "project", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => status_entity_1.Status, (status) => status.task, { cascade: true, eager: true }),
    (0, typeorm_1.JoinColumn)([
        { name: "status_id", referencedColumnName: "status_id" },
    ]),
    __metadata("design:type", status_entity_1.Status)
], Tasks.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => usertasks_entity_1.Usertasks, (usertasks) => usertasks.tasks),
    __metadata("design:type", Array)
], Tasks.prototype, "user_task", void 0);
exports.Tasks = Tasks = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String, String, String, String, Number, Number])
], Tasks);
//# sourceMappingURL=tasks.entity.js.map