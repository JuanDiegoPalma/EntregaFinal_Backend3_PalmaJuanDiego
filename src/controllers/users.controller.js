import { usersService } from '../services/index.js';
import { UserDTO } from '../dto/user.dto.js'; 

class UserController {
    constructor() {
        this.service = usersService;
    }

    createUser = async (req, res) => {
        try {
            const { body } = req;
            const result = await this.service.create(body); 
            res.send({ status: 'success', payload: result });
        } catch (error) {
            res.status(500).send({ status: 'error', message: error.message });
        }
    };

    getUsers = async (req, res) => {
        try {
            const users = await this.service.get(); 
            const usersDTO = users.map(user => new UserDTO(user)); 
            res.send({ status: 'success', payload: usersDTO });
        } catch (error) {
            res.status(500).send({ status: 'error', message: error.message });
        }
    };

    getUser = async (req, res) => {
        try {
            const { uid } = req.params; 
            const user = await this.service.getById(uid); 
            if (!user) {
                return res.status(404).send({ status: 'error', message: 'User not found' });
            }
            const userDTO = new UserDTO(user); 
            res.send({ status: 'success', payload: userDTO });
        } catch (error) {
            res.status(500).send({ status: 'error', message: error.message });
        }
    };

    updateUser = async (req, res) => {
        try {
            const { uid } = req.params; 
            const { body } = req; 
            const updatedUser = await this.service.update(uid, body); 
            res.send({ status: 'success', payload: updatedUser });
        } catch (error) {
            res.status(500).send({ status: 'error', message: error.message });
        }
    };

    deleteUser = async (req, res) => {
        try {
            const { uid } = req.params; 
            await this.service.delete(uid); 
            res.send({ status: 'success', message: 'User deleted successfully' });
        } catch (error) {
            res.status(500).send({ status: 'error', message: error.message });
        }
    };
}

export {
    UserController
};