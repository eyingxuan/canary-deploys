import request from 'supertest';
import express from 'express';
import router from '../routes.js';

const app = new express();
app.use('/', router);

describe('Home Route Test', () => {
  test('responds to /', async () => {
    const res = await request(app).get('/');
    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Version');
  });
});