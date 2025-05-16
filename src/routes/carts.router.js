import { Router } from 'express';
import { ticketModel } from '../../models/ticket.model.js';
import { cartRepository } from '../../repositories/cart.repository.js';
import { productRepository } from '../../repositories/product.repository.js';

const router = Router();

router.post('/:cid/purchase', async (req, res) => {
    const { cid } = req.params;
    const cart = await cartRepository.getCartById(cid);

    if (!cart) {
        return res.status(404).send({ status: 'error', error: 'Carrito no encontrado' });
    }

    const productsNotPurchased = [];
    let totalAmount = 0;

    for (const item of cart.products) {
        const product = await productRepository.getProductById(item.productId);
        if (product.stock >= item.quantity) {
            product.stock -= item.quantity;
            totalAmount += product.price * item.quantity;
            await productRepository.updateProduct(product._id, { stock: product.stock });
        } else {
            productsNotPurchased.push(item.productId);
        }
    }

    const ticket = await ticketModel.create({
        code: `TICKET-${Date.now()}`,
        amount: totalAmount,
        purchaser: req.user.email,
    });

    cart.products = cart.products.filter(item => productsNotPurchased.includes(item.productId));
    await cartRepository.updateCart(cid, { products: cart.products });

    res.send({ status: 'success', ticket, productsNotPurchased });
});

export { router as cartsRouter };