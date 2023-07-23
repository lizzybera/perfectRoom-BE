import express, {Router} from "express";
import { SignInUser, createUser, deleteUser, readUser, readUsers, updateUser } from "../controller/authController";

const router = Router()

router.route("/read").get(readUsers)
router.route("/:id/read-one").get(readUser)
router.route("/:id/update").get(updateUser)
router.route("/:id/delete").get(deleteUser)
router.route("/register").post(createUser)
router.route("/sign-in").post(SignInUser)

export default router