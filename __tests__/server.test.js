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
    expect(response.body).toEqual([]);
  });
  
  test('testing a 200 for POST `/food`', async () => {
    const response = await request.post('/food').send({
      name: 'test',
      calories: 100,
    });
    
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('test');
  });

  test('testing a 200 for GET `/food:foodId`', async () => {
    const response = await request.get('/food/1');

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('test');
  });
  
  test('testing a 200 for PUT `/food/:foodId`', async () => {
    const response = await request.put('/food/1').send({
      name: 'new test',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('new test');
  });

  test('testing a 200 for DELETE `/food:foodId`', async () => {
    const response = await request.delete('/food/1');

    expect(response.status).toEqual(204);
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