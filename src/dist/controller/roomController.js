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
exports.deleteRoom = exports.updateRoom = exports.readRooms = exports.readRoom = exports.createRoom = void 0;
const RoomModel_1 = __importDefault(require("../model/RoomModel"));
const createRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { roomName, roomSize, detailsOfRoom } = req.body;
        const room = yield RoomModel_1.default.create({ roomName,
            roomSize,
            isAvalable: false,
            detailsOfRoom });
        return res.status(201).json({
            message: "room created",
            data: room
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "room not created",
            data: error,
            errMsg: error.message
        });
    }
});
exports.createRoom = createRoom;
const readRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const Room = yield RoomModel_1.default.findById({ id });
        return res.status(200).json({
            message: "Room info",
            data: Room
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Room info not gotten",
        });
    }
});
exports.readRoom = readRoom;
const readRooms = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rooms = yield RoomModel_1.default.find();
        return res.status(200).json({
            message: "rooms info",
            data: rooms
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "rooms info not gotten",
        });
    }
});
exports.readRooms = readRooms;
const updateRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const updateRoom = yield RoomModel_1.default.findByIdAndUpdate(id, { isAvalable: true }, { new: true });
        return res.status(200).json({
            message: updateRoom
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "room info not updated"
        });
    }
});
exports.updateRoom = updateRoom;
const deleteRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const user = yield RoomModel_1.default.findByIdAndDelete(id);
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
exports.deleteRoom = deleteRoom;
