import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserRequest } from "../../interfaces/users";
import { hash } from "bcrypt";
import AppError from "../../errors/appError";

const createUserService = async ({name, email, tel, password, isAdm }: IUserRequest): Promise<User> => {
    const userRepository = AppDataSource.getRepository(User);

    const users = await userRepository.find();

    const emailAlreadyExists = users.find(user => user.email === email);

    if (emailAlreadyExists) {
        throw new AppError("email already exists!")
    }

    if (!password) {
        throw new AppError("Password is missing!")
    }

    const hashedPassword = await hash(password, 10);
    const user = userRepository.create({
        name,
        email,
        tel,
        password: hashedPassword,
        isAdm,
    })
    await userRepository.save(user);

    return user;
};

export default createUserService;