import { Router } from "express";
import createContactController from "../controllers/contacts/createContact.controller";
import deleteContactController from "../controllers/contacts/deleteContact.controller";
import listContactsController from "../controllers/contacts/listContacts.controller";
import getAuthMiddleware from "../middlewares/getAuth.middleware";
import isAdmMiddleware from "../middlewares/isAdmValidator.middleware";

const contactRoutes = Router()

contactRoutes.post("", getAuthMiddleware, createContactController)
contactRoutes.get("/users/:id", getAuthMiddleware, isAdmMiddleware, listContactsController)
contactRoutes.delete("/:id", getAuthMiddleware, deleteContactController)
// contactRoutes.patch("/:id", updateContactController)

export default contactRoutes