import app from '../src/server'
import request from 'supertest'
import { expect } from 'chai'

describe('all endpoints', () => {
  it('should 200 get', async () => {
    const res = await request(app).get('/')
    expect(res.status).to.equal(200)
  })
})
