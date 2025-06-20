import request from 'supertest';
import { expect } from 'chai';
import app from '../src/app.js';

describe('Rutas de Usuarios', () => {
  let testUserId;

  // Test POST /api/users
  it('POST /api/users debe crear un usuario', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({
        first_name: "Test",
        last_name: "User",
        email: "testuser@example.com",
        password: "123456"
      });
    expect(res.status).to.equal(201);
    expect(res.body).to.be.an('object');
    testUserId = res.body._id || res.body.id || res.body.user?._id;
  });

  // Test GET /api/users
  it('GET /api/users debe devolver todos los usuarios', async () => {
    const res = await request(app).get('/api/users');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });

  // Test GET /api/users/:uid
  it('GET /api/users/:uid debe devolver un usuario por ID', async () => {
    const res = await request(app).get(`/api/users/${testUserId}`);
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('object');
  });

  // Test PUT /api/users/:uid
  it('PUT /api/users/:uid debe actualizar un usuario', async () => {
    const res = await request(app)
      .put(`/api/users/${testUserId}`)
      .send({ first_name: "TestModificado" });
    expect(res.status).to.equal(200);
  });

  // Test DELETE /api/users/:uid
  it('DELETE /api/users/:uid debe eliminar un usuario', async () => {
    const res = await request(app).delete(`/api/users/${testUserId}`);
    expect(res.status).to.equal(200);
  });
});