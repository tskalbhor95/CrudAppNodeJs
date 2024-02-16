import app from '../src/app'
import request from 'supertest'
import { expect } from 'chai'
import { type Server } from 'http'

let server: Server

beforeEach(() => {
  server = app.listen()
})

afterEach(async () => {
  await new Promise<void>((resolve, reject) => {
    server.close((err) => {
      if (err != null) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
})

describe('Success cases', () => {
  it('should get 200 success for getAllPosts', async () => {
    const res = await request(app).get('/posts')
    expect(res.status).to.equal(200)
  })

  it('should 201  success for createPost', async () => {
    const res = await request(app).post('/posts').send({ title: 'Test Title', content: 'Test Content' })
    expect(res.status).to.equal(201)
  })

  it('should 200 success for updatePosts', async () => {
    const res = await request(app).put('/posts/1').send({ title: 'Updated Title', content: 'Updated Content' })
    expect(res.status).to.equal(200)
  })

  it('should 204 success for deletePost', async () => {
    const res = await request(app).delete('/posts/1')
    expect(res.status).to.equal(204)
  })
})

describe('failure cases', () => {
  it('should  404 for non-existent route', async () => {
    const res = await request(server).get('/non-existent-route')
    expect(res.status).to.equal(404)
  })

  it('should  400 for invalid request body', async () => {
    const res = await request(server).post('/posts').send({ invalid: 'data' })
    expect(res.status).to.equal(400)
  })

  it('should  404 for non-existent post', async () => {
    const res = await request(server).put('/posts/9999').send({ title: 'Updated Title', content: 'Updated Content' })
    expect(res.status).to.equal(404)
  })
})
