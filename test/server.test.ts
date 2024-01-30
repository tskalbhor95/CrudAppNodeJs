import app from '../src/app'
import request from 'supertest'
import { expect } from 'chai'

let server: any

beforeEach(() => {
  server = app.listen()
})

afterEach(() => {
  server.close()
})
describe('all endpoints', () => {
  it('should 200 get', async () => {
    const res = await request(app).get('/')
    expect(res.status).to.equal(200)
  })

  it('should 201 post', async () => {
    const res = await request(app).post('/posts').send({ title: 'Test Title', content: 'Test Content' })
    expect(res.status).to.equal(201)
  })

  it('should 200 put', async () => {
    const res = await request(app).put('/posts/1').send({ title: 'Updated Title', content: 'Updated Content' })
    expect(res.status).to.equal(200)
  })

  it('should 200 delete', async () => {
    const res = await request(app).delete('/posts/1')
    expect(res.status).to.equal(200)
  })
})
