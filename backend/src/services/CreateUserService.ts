import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '../errors/AppError';
import User from '../models/User';

interface Request {
    name: string;
    surname: string;
    username: string;
    email: string;
    password: string;
}

class CreateUserService {
    public async execute({ name, surname, username, email, password }: Request): Promise<User> {
        const usersRepository = getRepository(User);

        const checkUserExists = await usersRepository.findOne({
            where: { email },
        });

        if(checkUserExists) {
            throw new AppError('Email address already used');
        }

        const hashedPassword = await hash(password, 8);

        const user = usersRepository.create({
            name,
            surname,
            username,
            email,
            password: hashedPassword,
        });

        await usersRepository.save(user);

        return user;
    }
}

export default CreateUserService;