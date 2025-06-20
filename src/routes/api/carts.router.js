import { Router } from 'express';
import { TicketModel } from '../../daos/MONGO/models/ticket.model.js';

const router = Router();

/**
 *  @swagger
* /api/carts/{cid}/purchase:
 *   post:
 *     summary: Realiza la compra de un carrito y genera un ticket
 *     tags:
 *       - Carritos
 *     parameters:
 *       - in: path
 *         name: cid
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del carrito a comprar
 *     responses:
 *       200:
 *         description: Compra realizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 ticket:
 *                   type: object
 *                 productsNotPurchased:
 *                   type: array
 *                   items:
 *                     type: string
 *       404:
 *         description: Carrito no encontrado
 */

router.post('/:cid/purchase', async (req, res) => {
    const { cid } = req.params;
    const cart = await CartModel.findById(cid).populate('products.product');

    if (!cart) {
        return res.status(404).json({ error: 'Carrito no encontrado' });
    }

    const unavailableProducts = [];
    let totalAmount = 0;

    for (const item of cart.products) {
        if (item.product.stock >= item.quantity) {
            item.product.stock -= item.quantity;
            totalAmount += item.product.price * item.quantity;
            await item.product.save();
        } else {
            unavailableProducts.push(item.product._id);
        }
    }

    const ticket = await TicketModel.create({
        code: `TICKET-${Date.now()}`,
        amount: totalAmount,
        purchaser: req.user?.email || 'sin-email',
    });

    cart.products = cart.products.filter((item) =>
        unavailableProducts.includes(item.product._id)
    );
    await cart.save();

    res.status(200).json({
        status: 'success',
        ticket,
        productsNotPurchased: unavailableProducts
    });
});

export { router as cartsRouter };