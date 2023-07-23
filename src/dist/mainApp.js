"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const authRouter_1 = __importDefault(require("./router/authRouter"));
const roomRouter_1 = __importDefault(require("./router/roomRouter"));
const mainApp = (app) => {
    app.use((0, cors_1.default)())
        .use(express_1.default.json())
        .get("/", (req, res) => {
        try {
            return res.status(200).json({
                message: "welcome"
            });
        }
        catch (error) {
            console.log(error);
            return res.status(404).json({
                message: "an error has occured"
            });
        }
    })
        .use("/api/v1/auth", authRouter_1.default)
        .use("/api/v1/room", roomRouter_1.default);
};
exports.default = mainApp;
