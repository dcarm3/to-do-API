import userType from "../schemas/user.schemas";
import { UserType } from "../types/user.types";

class UserService {
    async create(user: UserType) {
        const createdUser = await userType.create(user);
        return createdUser;
    }

    async findAll() {
        const findedUsers = await userType.find();
        return findedUsers;
    }

    async findById(id: string) {
        const findedUser = await userType.findById(id);
        return findedUser;
    }

    async update(id: string, user: UserType) {
        const updateUser = await userType.findByIdAndUpdate(
            id,
            {
                id: user.id,
                userName: user.userName,
                weight: user.weight,
                password: user.password,
                email: user.email
            },
            { new: true }
        );
        return updateUser;
    }

    async delete(id: string) {
        try {
            await userType.findByIdAndDelete(id);
            return "User removeddg";
        } catch (error) {
            throw new Error('Error on removing user ${ error }');
        }
    }
}

export default new UserService();