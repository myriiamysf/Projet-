"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("./users/users.module");
const users_entity_1 = require("./users/users.entity");
const projects_module_1 = require("./projects/projects.module");
const status_module_1 = require("./status/status.module");
const tasks_module_1 = require("./tasks/tasks.module");
const usertasks_module_1 = require("./usertasks/usertasks.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRoot({
                type: 'mariadb',
                host: '127.0.0.1',
                port: 3306,
                username: 'root',
                password: 'france',
                database: 'task_management',
                autoLoadEntities: true,
                synchronize: true,
                entities: [users_entity_1.User],
            }),
            users_module_1.UsersModule,
            projects_module_1.ProjectsModule,
            status_module_1.StatusModule,
            tasks_module_1.TasksModule,
            usertasks_module_1.UsertasksModule
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map