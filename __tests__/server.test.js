'use strict';

const { expect, beforeAll } = require('@jest/globals');
const supertest = require('supertest');
const server = require('../src/server.js');
const request = supertest(server.app);
const data = require('../src/models/index.js');

beforeAll(async () => {
  await data.db.sync();
});

afterAll(async () => {
  await data.db.drop();
});

describe(' testing the server', () => {
  test('testing a 200 for GET `/food`', async () => {
    const response = await request.get('/food');

    expect(response.status).toEqual(200);
  });

  test('testing a 200 for POST `/food`', async () => {
    const response = await request.post('/food');

    expect(response.status).toEqual(200);
  });

  test('testing a 200 for PUT `/food`', async () => {
    const response = await request.put('/food');

    expect(response.status).toEqual(200);
  });

  test('testing a 200 for DELETE `/food`', async () => {
    const response = await request.delete('/food');

    expect(response.status).toEqual(200);
  });
});



// describe('API Server', () => {

//   it('handles invalid requests', async () => {
//     const response = await request.get('/foo');
//     expect(response.status).toEqual(404);
//   })

//   it('handles errors', async () => {
//     const response = await request.get('/person');
//     expect(response.status).toEqual(500);
//     expect(response.body.message).toEqual('SERVER ERROR: No name on query');
//   })

//   it('/ works', async () => {
//     const response = await request.get('/');
//     expect(response.status).toEqual(200);
//     expect(response.text).toEqual('Hello World');
//   })

//   it('/person works', async () => {
//     const response = await request.get('/person?name=test');
//     expect(response.status).toEqual(200);
//     expect(typeof response.body).toEqual('object');
//   })

// });