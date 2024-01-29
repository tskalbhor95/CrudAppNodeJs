import express from 'express'
import { db } from './database'
const app = express()

const HTTP_PORT = 8080

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

app.use(function (req, res) {
  res.status(404)
})
