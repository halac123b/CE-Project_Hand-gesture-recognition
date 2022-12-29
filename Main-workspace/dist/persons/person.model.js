"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personschema = void 0;
const mongoose = require("mongoose");
exports.Personschema = new mongoose.Schema({
    Fname: String,
    Lname: String,
    Status: Boolean,
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});
//# sourceMappingURL=person.model.js.map