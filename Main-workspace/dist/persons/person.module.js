"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const turn_model_1 = require("../turns/turn.model");
const turn_service_1 = require("../turns/turn.service");
const allhistory_controller_1 = require("./allhistory.controller");
const history_controller_1 = require("./history.controller");
const person_controller_1 = require("./person.controller");
const person_model_1 = require("./person.model");
const person_service_1 = require("./person.service");
const thongke_controller_1 = require("./thongke.controller");
let PersonModule = class PersonModule {
};
PersonModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Persons', schema: person_model_1.Personschema }, { name: 'turns', schema: turn_model_1.Turnschema }])],
        controllers: [person_controller_1.PersonController, history_controller_1.HistoryController, allhistory_controller_1.AllhistoryController, thongke_controller_1.ThongkeController],
        providers: [person_service_1.PersonService, turn_service_1.TurnService],
    })
], PersonModule);
exports.PersonModule = PersonModule;
//# sourceMappingURL=person.module.js.map