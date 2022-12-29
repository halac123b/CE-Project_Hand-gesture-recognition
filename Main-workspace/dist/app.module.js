"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const person_module_1 = require("./persons/person.module");
const turn_module_1 = require("./turns/turn.module");
const flag_module_1 = require("./flag/flag.module");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const unauthorized_exception_filter_1 = require("./filters/unauthorized-exception.filter");
const core_1 = require("@nestjs/core");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forRoot('mongodb+srv://halac123b:hapass2a@cluster0.lieodwt.mongodb.net/handRecognition?retryWrites=true&w=majority'),
            person_module_1.PersonModule, turn_module_1.TurnModule, flag_module_1.FlagModule, user_module_1.UserModule, auth_module_1.AuthModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, {
                provide: core_1.APP_FILTER,
                useClass: unauthorized_exception_filter_1.UnauthorizedExceptionFilter
            },],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map