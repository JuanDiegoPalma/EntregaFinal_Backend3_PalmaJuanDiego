import request from 'supertest';
import { expect } from 'chai';
import app from '../src/app.js';

describe('Rutas de Mocks', () => {
  it('POST /api/mocks/:users/:products debe generar usuarios y productos de prueba', async () => {
    const res = await request(app)
      .post('/api/mocks/2/3');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('users').that.is.an('array').with.lengthOf(2);
    expect(res.body).to.have.property('products').that.is.an('array').with.lengthOf(3);
  });
});