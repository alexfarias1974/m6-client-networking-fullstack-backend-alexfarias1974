import AppDataSource from "../../data-source";
import { IContactRequest } from "../../interfaces/contacts";
import AppError from "../../errors/appError";
import { User } from "../../entities/user.entity";
import { Contact } from "../../entities/contact.entity";

const createContactService =async ({name, email, tel, userId}: IContactRequest): Promise<Contact> => {
    const contactRepository = AppDataSource.getRepository(Contact)
    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.findOneBy({
        id: userId
    })

    if (!users) {
        throw new AppError ("User is not found", 404)
    }

    const contact = await contactRepository.save({
        user: users.id,
        name,
        email,
        tel,
    })

    return contact
}

export default createContactService