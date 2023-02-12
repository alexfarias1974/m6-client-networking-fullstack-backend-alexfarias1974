import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import listUserByIdController from "../controllers/users/listUserById.controller";
import listUsersController from "../controllers/users/listUsers.controller";
import softDeleteUserController from "../controllers/users/softDeleteUser.controller";
import updateUserController from "../controllers/users/updateUser.controller";
import getAuthMiddleware from "../middlewares/getAuth.middleware";
import isAdmMiddleware from "../middlewares/isAdmValidator.middleware";
import isIdValidatorMiddleware from "../middlewares/isIdValidator.middleware";
import validationBodyPatchMiddleware from "../middlewares/validationBodyPatch.middleware";

const userRoutes = Router()

userRoutes.post("", 
    createUserController
)

userRoutes.get("", 
    getAuthMiddleware, 
    listUsersController
)

userRoutes.get("/:id",
    getAuthMiddleware,
    isAdmMiddleware,
    listUserByIdController
)

userRoutes.delete("/:id", 
    getAuthMiddleware, 
    isAdmMiddleware, 
    isIdValidatorMiddleware, 
    softDeleteUserController
)

userRoutes.patch("/:id", 
    getAuthMiddleware, 
    isAdmMiddleware, 
    validationBodyPatchMiddleware, 
    updateUserController
)

export default userRoutes