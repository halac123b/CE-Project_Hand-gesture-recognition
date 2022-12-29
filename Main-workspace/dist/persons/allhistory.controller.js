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
exports.AllhistoryController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const turn_service_1 = require("../turns/turn.service");
const person_service_1 = require("./person.service");
let AllhistoryController = class AllhistoryController {
    constructor(personService, turnService) {
        this.personService = personService;
        this.turnService = turnService;
    }
    async index() {
        var list = await this.turnService.getTurns();
        var people = await this.personService.getPersons();
        for (var i = 0; i < list.length; i++) {
            for (var j = 0; j < people.length; j++) {
                if (!list[i].Response)
                    list[i].Response = false;
                if (people[j].Fname == "" && people[j].Lname == "") {
                    people[j].Fname = 'Unidentified';
                    people[j].Lname = 'Unidentified';
                }
                var neww = {
                    id: list[i].id,
                    urlimg: list[i].urlimg,
                    Status: list[i].Status,
                    Response: list[i].Response,
                    CreateAt: list[i].CreateAt,
                    Fname: people[j].Fname,
                    Lname: people[j].Lname,
                };
                list[i] = neww;
            }
        }
        for (var i = 0; i < list.length; i++) {
            if (!list[i]['Fname'] && !list[i]['Lname']) {
                var neww2 = {
                    id: list[i].id,
                    urlimg: list[i].urlimg,
                    Status: list[i].Status,
                    Response: list[i].Response,
                    CreateAt: list[i].CreateAt,
                    Fname: 'Unidentified',
                    Lname: 'Unidentified',
                };
                list[i] = neww2;
            }
        }
        return {
            list: list,
        };
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Render)('alldata/index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AllhistoryController.prototype, "index", null);
AllhistoryController = __decorate([
    (0, common_1.Controller)('alldata'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __metadata("design:paramtypes", [person_service_1.PersonService,
        turn_service_1.TurnService])
], AllhistoryController);
exports.AllhistoryController = AllhistoryController;
//# sourceMappingURL=allhistory.controller.js.map