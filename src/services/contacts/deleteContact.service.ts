import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
// import { User } from "../../entities/user.entity";
import AppError from "../../errors/appError";

const deleteContactService =async (contactId: string): Promise<void> => {
    // const userRepository = AppDataSource.getRepository(User)
    const contactsRepository = AppDataSource.getRepository(Contact)

    // const user = await userRepository.findOneBy({
    //     id: userId
    // })

    const contact = contactsRepository.findOne({
        where: {
            id: contactId,
        },
        // relations: {
        //     user: true,
        // },
    })

    if (!contact) {
        throw new AppError("Contact does not exist!", 404)
    }

    // if (contact.user.id)

    await contactsRepository.delete({
        id: contactId
    })

    return
}

export default deleteContactService