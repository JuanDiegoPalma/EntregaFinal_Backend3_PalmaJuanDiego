import request from 'supertest';
import { expect } from 'chai';
import app from '../src/app.js';

describe('Rutas de Carritos', () => {
  const carritoId = 'ID_DEL_CARRITO_DE_PRUEBA'; // Reemplaza por un ID válido

  it('POST /api/carts/:cid/purchase debe procesar la compra del carrito', async () => {
    const res = await request(app)
      .post(`/api/carts/${carritoId}/purchase`);

    expect(res.status).to.be.oneOf([200, 404]);
    if (res.status === 200) {
      expect(res.body).to.have.property('status', 'success');
      expect(res.body).to.have.property('ticket');
      expect(res.body).to.have.property('productsNotPurchased');
    } else {
      expect(res.body).to.have.property('error');
    }
  });
});