import express, {Router} from "express";
import { createRoom, deleteRoom, readRoom, readRooms, updateRoom } from "../controller/roomController";
import { upload } from "../config/multer";

const router = Router()

router.route("/read").get(readRooms)
router.route("/:id/read-one").get(readRoom)
router.route("/:id/update").patch(updateRoom)
router.route("/:id/delete").delete(deleteRoom)
router.route("/create").post(createRoom)

export default router