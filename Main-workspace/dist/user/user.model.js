"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose = require("mongoose");
exports.userSchema = new mongoose.Schema({
    username: String,
    password: String,
    updateAt: { type: Date, default: Date.now },
});
//# sourceMappingURL=user.model.js.map