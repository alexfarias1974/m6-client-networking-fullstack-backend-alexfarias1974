import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";

const userRoutes = Router()

userRoutes.post("", createUserController)
// userRoutes.get("", listUserController)
// userRoutes.delete("/:id", softDeleteUserController)
// userRoutes.patch("/:id", updateUserController)

export default userRoutes