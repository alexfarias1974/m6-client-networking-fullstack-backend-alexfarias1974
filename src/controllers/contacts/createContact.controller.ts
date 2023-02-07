import { Request, Response } from "express";
import { IContactRequest } from "../../interfaces/contacts";
import createContactService from "../../services/contacts/createContact.service";

const createContactController =async (req: Request, res: Response) => {
    const {name, email, tel}: IContactRequest = req.body
    const userId = req.user.id
    const createdContact = await createContactService({name, email, tel, userId})
    return res.status(201).json(createdContact)
}

export default createContactController