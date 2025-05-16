import { Router } from 'express';
import { TicketModel } from '../../daos/MONGO/models/ticket.model.js';

const router = Router();

router.post('/:cid/purchase', async (req, res) => {
    const { cid } = req.params;
    const cart = await CartModel.findById(cid).populate('products.product');

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
        purchaser: req.user.email,
    });

    cart.products = cart.products.filter((item) =>
        unavailableProducts.includes(item.product._id)
    );
    await cart.save();

    res.send({ ticket, unavailableProducts });
});

export { router as cartsRouter };