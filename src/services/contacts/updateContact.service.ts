import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import AppError from "../../errors/appError";
import { IContactUpdate } from "../../interfaces/contacts";

const updateContactService = async (
    id: string, 
    updateContactData: IContactUpdate
): Promise<Contact> => {
    const contactRepository = AppDataSource.getRepository(Contact)
    const contactFound = await contactRepository.findOne({
        where: {
            id,
        }
    })

    if (!contactFound) {
        throw new AppError ("Contact not found!")
    }

    await contactRepository.update(contactFound.id, {
        name: updateContactData.name ? updateContactData.name : contactFound.name,
        email: updateContactData.email ? updateContactData.email : contactFound.email,
        tel: updateContactData.tel ? updateContactData.tel : contactFound.tel,
    })

    const contactUpdated = await contactRepository.findOne({
        where: {
            id,
        }
    })

    return contactUpdated!
}

export default updateContactService