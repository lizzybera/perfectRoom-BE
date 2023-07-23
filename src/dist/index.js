"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mainApp_1 = __importDefault(require("./mainApp"));
const dataBase_1 = require("./config/dataBase");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const realPort = parseInt(process.env.PORT_NO);
const port = realPort;
(0, mainApp_1.default)(app);
const server = app.listen(port, () => {
    console.log(port);
    (0, dataBase_1.db)();
});
process.on("uncaughtException", (error) => {
    console.log("server is shutting down due to uncaughtException");
    console.log(error);
    process.exit(1);
});
process.on("unhandledRejection", (reason) => {
    console.log("server is shutting down due to unhandledRejection");
    console.log(reason);
    server.close(() => {
        process.exit(1);
    });
});
