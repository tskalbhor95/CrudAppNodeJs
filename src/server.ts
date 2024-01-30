import express from 'express'
import db from './database'
const app = express()

const HTTP_PORT = 8080

app.use(express.json())

app.listen(HTTP_PORT, () => {
  console.log('server running on port http://localhost:%PORT%/'.replace('%PORT%', HTTP_PORT.toString()))
})

app.get('/', (req, res, next) => {
  const sql = 'select * from post'
  const params: any[] = []
  db.all(sql, params, (err: Error | null, rows: any[]) => {
    if (err !== null) {
      res.status(400).json({ error: err.message })
      return
    }
    res.json({
      message: 'success',
      data: rows
    })
  })
})

app.post('/posts', (req, res, next) => {
  const { title, content } = req.body
  const sql = 'INSERT INTO post (title, content) VALUES  (?, ?)'
  const params: any[] = [title, content]
  db.run(sql, params, (err: Error, row: any[]) => {
    if (err !== null) {
      res.status(500).json({ error: err.message })
      return
    }
    res.json({
      message: 'post addedd'
    })
  })
})

app.delete('/posts/:id', (req, res, next) => {
  const postId = req.params.id
  const sql = 'DELETE FROM POST WHERE id  = ?'
  const params: any[] = [postId]
  db.run(sql, params, (err: Error, row: any[]) => {
    if (err !== null) {
      res.status(500).json({ error: err.message })
      return
    }
    res.json({
      message: 'post deleted'
    })
  })
})
app.put('/posts/:id', (req, res, next) => {
  const postId = req.params.id
  const { title, content } = req.body
  const sql = 'UPDATE post SET title = ? , content = ? where id = ?'
  const params: any[] = [title, content, postId]
  db.run(sql, params, (err: Error, row: any[]) => {
    if (err !== null) {
      res.status(500).json({ error: err.message })
      return
    }
    res.json({
      message: 'post updated'
    })
  })
})
app.use(function (req, res) {
  res.status(404)
})

export default app
