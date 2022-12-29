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
exports.TurnController = void 0;
const common_1 = require("@nestjs/common");
const turn_service_1 = require("./turn.service");
const flag_service_1 = require("../flag/flag.service");
const passport_1 = require("@nestjs/passport");
let TurnController = class TurnController {
    constructor(turnService, FlagService) {
        this.turnService = turnService;
        this.FlagService = FlagService;
    }
    async index() {
    }
    async getdata2() {
        var listflag = await this.FlagService.getFlags();
        var list = await this.turnService.getTurns();
        var index = list.length;
        var index1 = listflag.length;
        return {
            list: list[index - 1],
            flag: listflag[index1 - 1]
        };
    }
    async confirm(res) {
        var listflag = await this.FlagService.getFlags();
        var list = await this.turnService.getTurns();
        var index = list.length;
        var index1 = listflag.length;
        await this.FlagService.editFlag(listflag[index1 - 1].id, false, true);
        await this.turnService.editTurn(list[index - 1].id, list[index - 1].urlimg, list[index - 1].Status, true);
        res.redirect('/admin');
    }
    async refuse(res) {
        var listflag = await this.FlagService.getFlags();
        var list = await this.turnService.getTurns();
        var index = list.length;
        var index1 = listflag.length;
        await this.FlagService.editFlag(listflag[index1 - 1].id, false, false);
        await this.turnService.editTurn(list[index - 1].id, list[index - 1].urlimg, list[index - 1].Status, false);
        res.redirect('/admin');
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Render)('turn/index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TurnController.prototype, "index", null);
__decorate([
    (0, common_1.Post)('/getdata'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TurnController.prototype, "getdata2", null);
__decorate([
    (0, common_1.Post)('/confirm'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TurnController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)('/refuse'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TurnController.prototype, "refuse", null);
TurnController = __decorate([
    (0, common_1.Controller)('admin'),
    __metadata("design:paramtypes", [turn_service_1.TurnService, flag_service_1.FlagService])
], TurnController);
exports.TurnController = TurnController;
//# sourceMappingURL=turn.controller.js.map