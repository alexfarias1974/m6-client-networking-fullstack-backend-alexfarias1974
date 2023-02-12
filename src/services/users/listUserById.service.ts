import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/appError";

const listUserByIdService = async (userId: string): Promise<User> => {
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        id: userId
    })

    if (!user) {
        throw new AppError("User not found!")
    }
    return user
}

export default listUserByIdService;