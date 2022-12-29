"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Turnschema = void 0;
const mongoose = require("mongoose");
exports.Turnschema = new mongoose.Schema({
    urlimg: String,
    Status: Boolean,
    Response: Boolean,
    createAt: { type: Date, default: Date.now },
});
//# sourceMappingURL=turn.model.js.map