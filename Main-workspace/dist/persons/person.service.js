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
exports.PersonService = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("mongoose");
let PersonService = class PersonService {
    constructor(personModel) {
        this.personModel = personModel;
        this.persons = [];
    }
    async insertPerson(Fname, Lname, Status) {
        const newPerson = new this.personModel({
            Fname,
            Lname,
            Status,
        });
        const result = await newPerson.save();
        return result.id;
    }
    async editPerson(personId, Fname, Lname, Status, updateAt) {
        const update = await this.personModel.findById(personId);
        update.Status = Status;
        update.Fname = Fname;
        update.Lname = Lname;
        update.updateAt = updateAt;
        update.save();
    }
    async getSingPerson(personId) {
        const result = await this.personModel.findById(personId);
        return {
            id: result.id,
            Fname: result.Fname,
            Lname: result.Lname,
            Status: result.Status,
            updateAt: result.updateAt,
        };
    }
    async deletePerson(personId) {
        await this.personModel.deleteOne({ _id: personId }).exec();
    }
    async getPersons() {
        const persons = await this.personModel.find().exec();
        return persons.map((prod) => ({
            id: prod.id,
            Fname: prod.Fname,
            Lname: prod.Lname,
            Status: prod.Status,
        }));
    }
};
PersonService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Persons')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PersonService);
exports.PersonService = PersonService;
//# sourceMappingURL=person.service.js.map