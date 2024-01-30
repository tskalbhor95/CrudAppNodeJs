import express from 'express'
import db from './database'
import httpStatus from 'http-status-codes'
import config from 'config'
const app = express()

const getSql: string = config.get('sql.get')
const putSql: string = config.get('sql.put')
const postSql: string = config.get('sql.post')
const deleteSql: string = config.get('sql.delete')
const HTTP_PORT = 8080

app.use(express.json())

app.listen(HTTP_PORT, () => {
  console.log('server running on port http://localhost:%PORT%/'.replace('%PORT%', HTTP_PORT.toString()))
})

app.get('/', (req, res) => {
  db.all(getSql, [], (err: Error | null, rows: any[]) => {
    if (err !== null) {
      res.status(httpStatus.BAD_REQUEST).json({ error: err.message })
      return
    }
    res.status(httpStatus.OK)
    res.json({
      message: 'success',
      data: rows
    })
  })
})

app.post('/posts', (req, res) => {
  const { title, content } = req.body
  db.run(postSql, [title, content], (err: Error, row: any[]) => {
    if (err !== null) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: err.message })
      return
    }
    res.status(httpStatus.CREATED)
    res.json({
      message: 'post added'
    })
  })
})

app.delete('/posts/:id', (req, res) => {
  const postId = req.params.id
  db.run(deleteSql, [postId], (err: Error, row: any[]) => {
    if (err !== null) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: err.message })
      return
    }
    res.status(httpStatus.OK)
    res.json({
      message: `post deleted with ${postId}`
    })
  })
})
app.put('/posts/:id', (req, res) => {
  const postId = req.params.id
  const { title, content } = req.body
  db.run(putSql, [title, content, postId], (err: Error, row: any[]) => {
    if (err !== null) {
      res.status(500).json({ error: err.message })
      return
    }
    res.status(httpStatus.OK)
    res.json({
      message: `post updated with ${postId}`
    })
  })
})
app.use(function (req, res) {
  res.status(httpStatus.NOT_FOUND)
})

export default app
