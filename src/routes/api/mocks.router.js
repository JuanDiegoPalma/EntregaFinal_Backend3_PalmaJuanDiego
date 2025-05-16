import { Router } from 'express';
import { generateUsers, generateProducts } from '../../mocks/mockGenerator.js';

const router = Router();

router.post('/:users/:products', async (req, res) => {
    const usersCount = parseInt(req.params.users);
    const productsCount = parseInt(req.params.products);
    try {
        const users = await generateUsers(usersCount);
        const products = await generateProducts(productsCount);
        res.json({ users, products });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;