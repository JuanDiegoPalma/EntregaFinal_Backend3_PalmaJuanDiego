import { configObject } from "../config/index.js";

const { persistence } = configObject;
let UsersDao;
let ProductsDao;

switch (persistence) {
    case 'MEMORY':
        const { default: UserDaoMemory } = await import('./MEMORY/usersMemory.dao.js');
        UsersDao = UserDaoMemory;
        const { default: ProductDaoMemory } = await import('./MEMORY/productsMemory.dao.js');
        ProductsDao = ProductDaoMemory;
        break;

    case 'FS':
        const { default: UserDaoFS } = await import('./FS/usersFS.dao.js');
        UsersDao = UserDaoFS;
        const { default: ProductDaoFS } = await import('./FS/productsFS.dao.js');
        ProductsDao = ProductDaoFS;
        break;

    default:
        const { default: UsersDaoMongo } = await import('./MONGO/users.dao.js');
        UsersDao = UsersDaoMongo;

        const { default: ProductsDaoMongo } = await import('./MONGO/products.dao.js');
        ProductsDao = ProductsDaoMongo;
        break;
}

export { UsersDao, ProductsDao };