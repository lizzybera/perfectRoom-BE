"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const roomSchema = new mongoose_1.default.Schema({
    roomName: {
        type: String,
        unique: true
    },
    roomSize: {
        type: String
    },
    isAvalable: {
        type: Boolean,
        default: false
    },
    detailsOfRoom: {
        type: String
    },
});
exports.default = mongoose_1.default.model("rooms", roomSchema);
