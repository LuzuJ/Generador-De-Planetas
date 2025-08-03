const request = require('supertest');
const { app, server } = require('./index');

describe('GET /planeta', () => {
  afterAll((done) => {
    server.close(done);
  });

  it('Debería devolver un objeto de planeta con nombre, tipo y descripción', async () => {
    const response = await request(app).get('/planeta');
    
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('nombre');
    expect(response.body).toHaveProperty('tipo');
    expect(response.body).toHaveProperty('descripcion');
    expect(typeof response.body.nombre).toBe('string');
  });
});