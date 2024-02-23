import app from '../src/app'
import request from 'supertest'
import { expect } from 'chai'
import { type Server } from 'http'
import * as sinon from 'sinon'

import db from '../src/database'
import { getAllPostsMock, getPostMock } from './mocks/dbmocks'

let server: Server, sandBox: any, dbAllStub: sinon.SinonStub, dbRunStub: any, dbGetStub: any

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
  beforeEach(() => {
    sandBox = sinon.createSandbox()

    dbAllStub = sandBox.stub(db, 'all')
    dbAllStub.callsFake((sql: string, params: [], callback: any) => {
      callback(null, getAllPostsMock)
    })

    dbRunStub = sandBox.stub(db, 'run')
    dbRunStub.callsFake((sql: string, params: [], callback: any) => {
      callback(null, {})
    })

    dbGetStub = sandBox.stub(db, 'get')
    dbGetStub.callsFake((sql: string, params: [], callback: any) => {
      callback(null, getPostMock)
    })
  })

  afterEach(() => {
    sandBox.restore()
  })

  it('should get 200 success for getAllPosts', async () => {
    const res = await request(app).get('/posts')
    expect(res.status).to.equal(200)
    expect(res.body.data).to.deep.equal(getAllPostsMock)
  })

  it('should get 200 success for getting a post', async () => {
    const res = await request(app).get('/posts/1')
    expect(res.status).to.equal(200)
    expect(res.body.data).to.deep.equal(getPostMock)
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
  beforeEach(() => {
    sandBox = sinon.createSandbox()

    dbAllStub = sandBox.stub(db, 'all')
    dbAllStub.callsFake((sql: string, params: [], callback: any) => {
      callback({
        message: '500'
      })
    })

    dbRunStub = sandBox.stub(db, 'run')
    dbRunStub.callsFake((sql: string, params: [], callback: any) => {
      callback({
        message: ''
      })
    })

    dbGetStub = sandBox.stub(db, 'get')
    dbGetStub.callsFake((sql: string, params: [], callback: any) => {
      callback({
        meesage: 'error'
      })
    })
  })

  afterEach(() => {
    sandBox.restore()
  })

  it('should  404 for non-existent route', async () => {
    const res = await request(server).get('/non-existent-route')
    expect(res.status).to.equal(404)
  })

  it('should  400 for invalid request body', async () => {
    const res = await request(server).post('/posts').send({ invalid: 'data' })
    expect(res.status).to.equal(400)
  })

  it('should  400 for empty request body object', async () => {
    const res = await request(server).post('/posts').send({ title: '  ', content: '  ' })
    expect(res.status).to.equal(400)
  })

  it('should  404 for non-existent post', async () => {
    const res = await request(server).put('/posts/9999').send({ title: 'Updated Title', content: 'Updated Content' })
    expect(res.status).to.equal(204)
  })

  it('should throw 500 error for getting a post', async () => {
    const res = await request(app).get('/posts/1')
    expect(res.status).to.equal(500)
  })

  it('should throw 500 error for getAllPosts', async () => {
    const res = await request(app).get('/posts')
    expect(res.status).to.equal(500)
  })

  it('should throw 500 error for createPost', async () => {
    const res = await request(app).post('/posts').send({ title: 'Test Title', content: 'Test Content' })
    expect(res.status).to.equal(500)
  })

  it('should throw 500 error for deletePost', async () => {
    const res = await request(app).delete('/posts/1')
    expect(res.status).to.equal(500)
  })
})
