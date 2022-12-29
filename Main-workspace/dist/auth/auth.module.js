"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const auth_controller_1 = require("./auth.controller");
const local_strategy_1 = require("./local.strategy");
const jwt_trategy_1 = require("./jwt.trategy");
const user_service_1 = require("../user/user.service");
const user_model_1 = require("../user/user.model");
const dotenv = require("dotenv");
dotenv.config({ path: __dirname + '/.env' });
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule,
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forFeature([{ name: 'Users', schema: user_model_1.userSchema }]),
            jwt_1.JwtModule.register({
                secret: "secret",
                signOptions: {
                    expiresIn: 60 * 30,
                },
            }),
            mongoose_1.MongooseModule.forFeature([{ name: 'Users', schema: user_model_1.userSchema }]),
        ],
        providers: [jwt_trategy_1.JwtStrategy, user_service_1.UserService, local_strategy_1.LocalStrategy],
        controllers: [auth_controller_1.AuthController],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map