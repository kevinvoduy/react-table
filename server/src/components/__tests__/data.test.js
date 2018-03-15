import request from 'supertest';

const app = require('../../').app;
const server = require('../../').serve;

beforeAll(async (done) => {
  server.close();
  done();
});

afterEach((done) => {
  server.close();
  done();
});

describe('fetching data tests', () => {
  test('it should hit the id controller', async() => {
    expect.assertions(1);
    const { status, text } = await request(app.listen(1234))
      .get('/api/data/ids');
    expect(status).toBe(200);
  });

  test('it should hit the metrics controller', async() => {
    expect.assertions(1);
    const { status, text } = await request(app.listen(1233))
      .get('/api/data/metrics');
    expect(status).toBe(200);
  });
});