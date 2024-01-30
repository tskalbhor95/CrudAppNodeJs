import express from 'express'
import config from 'config'
import db from '../database'
import httpStatus from 'http-status-codes'

const router = express.Router()

const getSql: string = config.get('sql.get')
const putSql: string = config.get('sql.put')
const postSql: string = config.get('sql.post')
const deleteSql: string = config.get('sql.delete')

router.get('/', (req, res) => {
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

router.post('/', (req, res) => {
  const { title, content } = req.body
  db.run(postSql, [title, content], (err: Error) => {
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

router.delete('/:id', (req, res) => {
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

router.put('/:id', (req, res) => {
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

export default router
