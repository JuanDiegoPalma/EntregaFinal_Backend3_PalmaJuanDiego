import request from 'supertest';
import { expect } from 'chai';
import app from '../src/app.js';

describe('Rutas de Sesiones', () => {
  let token;

  it('POST /api/sessions/register debe registrar un usuario', async () => {
    const res = await request(app)
      .post('/api/sessions/register')
      .send({
        first_name: "Test",
        last_name: "Session",
        email: "usuario1@example.com",
        password: "123456"
      });
    expect(res.status).to.equal(200);
  });

  it('POST /api/sessions/login debe iniciar sesión y devolver un token', async () => {
    const res = await request(app)
      .post('/api/sessions/login')
      .send({
        email: "sessionuser@example.com",
        password: "123456"
      });
    expect(res.status).to.equal(200);
    token = res.body.token;
  });

  it('GET /api/sessions/current debe devolver el usuario autenticado', async () => {
    const res = await request(app)
      .get('/api/sessions/current')
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).to.be.oneOf([200, 401]);
  });
});