import { Router } from 'express';
import { generateUsers, generateProducts } from '../../mocks/mockGenerator.js';

const router = Router();

/**
 * @swagger
 * /api/mocks/{users}/{products}:
 *   post:
 *     summary: Genera usuarios y productos de prueba (mock)
 *     tags:
 *       - Mocks
 *     parameters:
 *       - in: path
 *         name: users
 *         required: true
 *         schema:
 *           type: integer
 *         description: Cantidad de usuarios a generar
 *       - in: path
 *         name: products
 *         required: true
 *         schema:
 *           type: integer
 *         description: Cantidad de productos a generar
 *     responses:
 *       200:
 *         description: Usuarios y productos generados exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 users:
 *                   type: array
 *                   items:
 *                     type: object
 *                 products:
 *                   type: array
 *                   items:
 *                     type: object
 *       500:
 *         description: Error al generar los mocks
 */

router.post('/:users/:products', async (req, res) => {
    const usersCount = parseInt(req.params.users);
    const productsCount = parseInt(req.params.products);
    try {
        const users = await generateUsers(usersCount);
        const products = await generateProducts(productsCount);
        return res.status(200).json({
            users,
            products
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;