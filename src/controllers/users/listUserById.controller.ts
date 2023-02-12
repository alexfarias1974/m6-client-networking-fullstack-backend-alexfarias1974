import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import listUserByIdService from "../../services/users/listUserById.service";

const listUserByIdController = async (req: Request, res: Response) => {
    const id = req.params.id
    const user = await listUserByIdService(id)
    return res.json(instanceToPlain(user))    
}

export default listUserByIdController;