import { UserDTO } from "../dto/user.dto.js"

class UserRepository {
    constructor(dao) {
        this.dao = dao
    }
    
    createUser    = async newUser => {
        const userDto = new UserDto(newUser)
        return await this.dao.create(UserDTO)
    }
    getUsers      = async () => await this.dao.get()
    getUser       = async filter => {}
    updateUser    = async (uid, userToUpdate) => {}
    deleteUser    = async (uid) => {}


}

export {
    UserRepository
}