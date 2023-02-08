import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import AppError from "../../errors/appError";
import updateContactService from "../../services/contacts/updateContact.service";

const updateContactController = async (req: Request, res: Response) => {
    try {
        const contactId = req.params.id
        const updateContactData = req.body
        const updatedContact = await updateContactService(contactId, updateContactData)
        return res.status(200).json(instanceToPlain(updatedContact))
    } catch (error) {
        if (error instanceof AppError) {
            const { statusCode, message } = error
            return res.status(statusCode).json({
                status: "error",
                statusCode,
                message,
            })
        }
    }
}

export default updateContactController