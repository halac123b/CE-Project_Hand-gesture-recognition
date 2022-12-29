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
exports.ThongkeController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const turn_service_1 = require("../turns/turn.service");
const person_service_1 = require("./person.service");
let ThongkeController = class ThongkeController {
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
        var percentquen = Math.round(totalquen * 100 / totalofturn);
        var percentla = Math.round(totalla * 100 / totalofturn);
        return {
            totalofturn: totalofturn,
            totalinday: totalinday,
            totalla: totalla,
            totalquen: totalquen,
            percentquen: percentquen,
            percentla: percentla
        };
    }
    async getdata2(id) {
        var dataturn = await this.turnService.getTurns();
        return {
            list: dataturn
        };
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Render)('thongke/index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ThongkeController.prototype, "index", null);
__decorate([
    (0, common_1.Post)('/getall'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ThongkeController.prototype, "getdata2", null);
ThongkeController = __decorate([
    (0, common_1.Controller)('thongke'),
    __metadata("design:paramtypes", [person_service_1.PersonService, turn_service_1.TurnService])
], ThongkeController);
exports.ThongkeController = ThongkeController;
//# sourceMappingURL=thongke.controller.js.map