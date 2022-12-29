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
exports.PersonController = void 0;
const common_1 = require("@nestjs/common");
const turn_service_1 = require("../turns/turn.service");
const person_service_1 = require("./person.service");
let PersonController = class PersonController {
    constructor(personService, turnService) {
        this.personService = personService;
        this.turnService = turnService;
    }
    async index() {
        var dataturn = await this.turnService.getTurns();
        var totalofturn = dataturn.length;
        var today = new Date();
        var myToday = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0);
        var totalinday = 0;
        var totalla = 0;
        var totalquen = 0;
        for (var i = 0; i < dataturn.length; i++) {
            if (dataturn[i].CreateAt > myToday) {
                totalinday++;
                if (dataturn[i].Status == true) {
                    totalquen++;
                }
                else {
                    totalla++;
                }
            }
        }
        return {
            totalofturn: totalofturn,
            totalinday: totalinday,
            totalla: totalla,
            totalquen: totalquen
        };
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('new'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "index", null);
PersonController = __decorate([
    (0, common_1.Controller)('home'),
    __metadata("design:paramtypes", [person_service_1.PersonService, turn_service_1.TurnService])
], PersonController);
exports.PersonController = PersonController;
//# sourceMappingURL=person.controller.js.map