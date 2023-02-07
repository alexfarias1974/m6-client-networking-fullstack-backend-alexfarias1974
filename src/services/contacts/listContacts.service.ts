import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { Contact } from "../../entities/contact.entity";
import AppError from "../../errors/appError";

const listContactsService = async (id: string) => {
    const contactRepository = AppDataSource.getRepository(Contact)
    const userRepository = AppDataSource.getRepository(User)

    const user_contacts = await userRepository.findOne({
        where: {
            id,
        },
        relations: {
            contact: true,
        },
    })

    if (!user_contacts) {
        throw new AppError ("Contact not found!", 404)
    }

    return user_contacts
}

export default listContactsService
