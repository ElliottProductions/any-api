const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/planets should return a list of planets', async () => {
    const res = await request(app).get('/planets');
    const expected = [{ 'id':'1', 'name':'Mercury' }, { 'id':'2', 'name':'Venus' }, { 'id':'3', 'name':'Earth' }, { 'id':'4', 'name':'Mars' }, { 'id':'5', 'name':'Jupiter' }, { 'id':'6', 'name':'Saturn' }, { 'id':'7', 'name':'Uranus' }, { 'id':'8', 'name':'Neptune' }];
    expect(res.body).toEqual(expected);
  });
  it('/planets/1 should return the planet mercury', async () => {
    const res = await request(app).get('/planets/1');
    const expected = { 'id':'1', 'name':'Mercury', 'type':'terrestrial', 'url':'https://cdn.mos.cms.futurecdn.net/PFQ97KNjjTebMzenT3GeKd-1200-80.jpg', 'distance_from_sun':41, 'orbital_period_in_days':88 };
    expect(res.body).toEqual(expected);
  });

  afterAll(() => {
    pool.end();
  });
});
