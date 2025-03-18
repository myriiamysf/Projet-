"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsertasksModule = void 0;
const common_1 = require("@nestjs/common");
const usertasks_controller_1 = require("./usertasks.controller");
const usertasks_service_1 = require("./usertasks.service");
const typeorm_1 = require("@nestjs/typeorm");
const usertasks_entity_1 = require("./usertasks.entity");
let UsertasksModule = class UsertasksModule {
};
exports.UsertasksModule = UsertasksModule;
exports.UsertasksModule = UsertasksModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([usertasks_entity_1.Usertasks])],
        controllers: [usertasks_controller_1.UsertasksController],
        providers: [usertasks_service_1.UsertasksService],
        exports: [typeorm_1.TypeOrmModule]
    })
], UsertasksModule);
//# sourceMappingURL=usertasks.module.js.map