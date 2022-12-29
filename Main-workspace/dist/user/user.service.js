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
exports.UserService = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("mongoose");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
        this.Users = [];
    }
    async insertUser(usernamee, password) {
        const newUser = new this.userModel();
        newUser.username = usernamee;
        newUser.password = password;
        newUser.updateAt = new Date();
        const result = await newUser.save();
        return result.id;
    }
    async editUser(id, username, password) {
        const update = await this.userModel.findById(id);
        update.updateAt = new Date();
        update.password = password;
        update.save();
    }
    async getSingUser(UserId) {
        const result = await this.userModel.findById(UserId);
        return {
            username: result.username,
            password: result.password,
            updateAt: result.updateAt,
            id: result.id,
        };
    }
    async deleteUser(UserId) {
        await this.userModel.deleteOne({ _id: UserId }).exec();
    }
    async getUsers() {
        const Users = await this.userModel.find().exec();
        return Users.map((prod) => ({
            username: prod.username,
            password: prod.password,
            updateAt: prod.updateAt,
            id: prod.id,
        }));
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Users')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map