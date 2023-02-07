import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import listContactsService from "../../services/contacts/listContacts.service";

const listContactsController =async (req: Request, res: Response) => {
    const userId = req.params.id
    const contacts = await listContactsService(userId)
    return res.json(instanceToPlain(contacts))
}

export default listContactsController