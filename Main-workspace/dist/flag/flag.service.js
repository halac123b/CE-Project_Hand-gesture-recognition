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
exports.FlagService = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("mongoose");
let FlagService = class FlagService {
    constructor(FlagModel) {
        this.FlagModel = FlagModel;
        this.Flags = [];
    }
    async insertFlag(Flagcheck, Response) {
        const newFlag = new this.FlagModel({
            Flagcheck,
            Response
        });
        const result = await newFlag.save();
        return result.id;
    }
    async editFlag(id, Flagcheck, Response) {
        const update = await this.FlagModel.findById(id);
        update.Flagcheck = Flagcheck;
        update.Response = Response;
        update.save();
    }
    async getSingFlag(FlagId) {
        const result = await this.FlagModel.findById(FlagId);
        return {
            Flagcheck: result.Flagcheck,
            Response: result.Response,
            id: result.id,
        };
    }
    async deleteFlag(FlagId) {
        await this.FlagModel.deleteOne({ _id: FlagId }).exec();
    }
    async getFlags() {
        const Flags = await this.FlagModel.find().exec();
        return Flags.map((prod) => ({
            Flagcheck: prod.Flagcheck,
            Response: prod.Response,
            id: prod.id,
        }));
    }
};
FlagService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Flags')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FlagService);
exports.FlagService = FlagService;
//# sourceMappingURL=flag.service.js.map