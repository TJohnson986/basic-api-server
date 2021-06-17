'use strict';

const supertest = require('supertest');
const server = require('../server.js')
const request = supertest(server);

describe('API Server', () => {

  it('handles invalid requests', async () => {
    const response = await request.get('/foo');
    expect(response.status).toEqual(404);
  })

  it('handles errors', async () => {
    const response = await request.get('/person');
    expect(response.status).toEqual(500);
    expect(response.body.message).toEqual('SERVER ERROR: No name on query');
  })

  it('/ works', async () => {
    const response = await request.get('/');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Hello World');
  })

  it('/person works', async () => {
    const response = await request.get('/person?name=test');
    expect(response.status).toEqual(200);
    expect(typeof response.body).toEqual('object');
  })

});