"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.readUsers = exports.readUser = exports.SignInUser = exports.createUser = void 0;
const authModel_1 = __importDefault(require("../model/authModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password, avatar } = req.body;
        const salt = yield bcrypt_1.default.genSalt(10);
        const hash = yield bcrypt_1.default.hash(password, salt);
        const user = yield authModel_1.default.create({ name, email, password: hash, avatar });
        return res.status(201).json({
            message: "user created",
            data: user
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "user not created",
        });
    }
});
exports.createUser = createUser;
const SignInUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield authModel_1.default.findOne({ email });
        if (user) {
            const passed = yield bcrypt_1.default.compare(password, user.password);
            if (passed) {
                return res.status(201).json({
                    message: `welcome back ${user.name}`,
                    data: user._id
                });
            }
            else {
                return res.status(404).json({
                    message: "incorrect password",
                });
            }
        }
        else {
            return res.status(404).json({
                message: "user not found",
            });
        }
    }
    catch (error) {
        return res.status(404).json({
            message: "user not signed in",
        });
    }
});
exports.SignInUser = SignInUser;
const readUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield authModel_1.default.findById({ id });
        return res.status(200).json({
            message: "user info",
            data: user
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "user info not gotten",
        });
    }
});
exports.readUser = readUser;
const readUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield authModel_1.default.find();
        return res.status(200).json({
            message: "users info",
            data: user
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "users info not gotten",
        });
    }
});
exports.readUsers = readUsers;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, avatar } = req.body;
        const user = yield authModel_1.default.findByIdAndUpdate({ id }, { name, avatar }, { new: true });
        return res.status(200).json({
            message: "user info updated",
            data: user
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "user info not updated",
        });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield authModel_1.default.findByIdAndDelete({ id });
        return res.status(200).json({
            message: "users info deleted",
            data: user
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "users info not deleted",
        });
    }
});
exports.deleteUser = deleteUser;
