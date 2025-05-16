import { faker } from '@faker-js/faker';
import UserModel from '../models/user.model.js';
import ProductModel from '../models/product.model.js';

export async function generateUsers(n) {
    const users = [];
    for (let i = 0; i < n; i++) {
        users.push({
            name: faker.person.firstName(),
            email: faker.internet.email(),
            password: faker.internet.password()
        });
    }
    return await UserModel.insertMany(users);
}

export async function generateProducts(n) {
    const products = [];
    for (let i = 0; i < n; i++) {
        products.push({
            title: faker.commerce.productName(),
            price: faker.commerce.price(),
            description: faker.commerce.productDescription()
        });
    }
    return await ProductModel.insertMany(products);
}