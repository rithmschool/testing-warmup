const app = require('./app');
const request = require('supertest');

describe('Express App', async () => {
  it('responds with a 200 at /names', async () => {
    const result = await request(app).get('/names');
    expect(result.statusCode).toBe(200);
  });
});
