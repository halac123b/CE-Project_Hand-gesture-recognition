"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurnModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const flag_model_1 = require("../flag/flag.model");
const flag_service_1 = require("../flag/flag.service");
const turn_controller_1 = require("./turn.controller");
const turn_model_1 = require("./turn.model");
const turn_service_1 = require("./turn.service");
let TurnModule = class TurnModule {
};
TurnModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'turns', schema: turn_model_1.Turnschema }, { name: 'Flags', schema: flag_model_1.Flagschema }])],
        controllers: [turn_controller_1.TurnController],
        providers: [turn_service_1.TurnService, flag_service_1.FlagService],
    })
], TurnModule);
exports.TurnModule = TurnModule;
//# sourceMappingURL=turn.module.js.map