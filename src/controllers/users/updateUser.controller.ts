import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { IUserUpdate } from "../../interfaces/users";
import updateUSerService from "../../services/users/updateUser.service";

const updateUserController = async (req: Request, res: Response) => {

    const user: IUserUpdate = req.body;
    const id: string = req.params.id;
    const updatedUser = await updateUSerService(user, id);
    return res.json(instanceToPlain(updatedUser));

}

export default updateUserController;