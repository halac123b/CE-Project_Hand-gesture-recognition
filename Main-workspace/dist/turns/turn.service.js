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
exports.TurnService = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("mongoose");
let TurnService = class TurnService {
    constructor(turnModel) {
        this.turnModel = turnModel;
        this.turns = [];
    }
    async insertTurn(urlimg, Status, Response) {
        const newTurn = new this.turnModel({
            urlimg,
            Status,
            Response,
        });
        const result = await newTurn.save();
        return result.id;
    }
    async editTurn(turnId, urlimg, Status, Response) {
        const update = await this.turnModel.findById(turnId);
        update.Status = Status;
        update.urlimg = urlimg;
        update.Response = Response;
        update.save();
    }
    async getSingTurn(turnId) {
        const result = await this.turnModel.findById(turnId);
        return {
            id: result.id,
            urlimg: result.urlimg,
            Status: result.Status,
            Response: result.Response,
        };
    }
    async deleteTurn(turnId) {
        await this.turnModel.deleteOne({ _id: turnId }).exec();
    }
    async getTurns() {
        const turns = await this.turnModel.find().exec();
        return turns.map((prod) => ({
            id: prod.id,
            urlimg: prod.urlimg,
            Status: prod.Status,
            Response: prod.Response,
            CreateAt: prod.createAt,
        }));
    }
};
TurnService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('turns')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TurnService);
exports.TurnService = TurnService;
//# sourceMappingURL=turn.service.js.map