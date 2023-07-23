"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const authSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        trim: true
    },
    avatar: {
        type: String
    },
    // rooms :[
    //     {
    //         type : mongoose.Schema.Types.ObjectId,
    //         ref: "AllRooms"
    //     }
    // ]
}, { timestamps: true });
exports.default = mongoose_1.default.model("auths", authSchema);
