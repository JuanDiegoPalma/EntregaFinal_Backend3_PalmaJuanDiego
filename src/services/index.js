import { UsersDao, ProductsDao } from "../daos/factory.js";
import { ProductRepository } from "./product.repository.js";
import { UserRepository } from "./users.repository.js";

const usersService = new UserRepository(new UsersDao());
const productService = new ProductRepository(new ProductsDao());

export {
    usersService,
    productService
};