import db from '../database'
import config from 'config'
import { type Post } from '../model/Post'

const getPostSql: string = config.get('sql.getPost')
const getAllPostsSql: string = config.get('sql.getAllPosts')
const updatePostSql: string = config.get('sql.updatePost')
const createPostSql: string = config.get('sql.createPost')
const deletePostSql: string = config.get('sql.deletePost')

export const getAllPosts = async (): Promise<Post[]> => {
  return await new Promise<Post[]>((resolve, reject) => {
    db.all(getAllPostsSql, [], (err: Error, rows: Post[]) => {
      if (err != null) {
        reject(err)
      } else {
        resolve(rows)
      }
    })
  })
}

export const getPost = async (id: number): Promise<Post> => {
  return await new Promise<Post>((resolve, reject) => {
    db.get(getPostSql, [id], (err: Error, row: Post) => {
      if (err !== null) {
        console.log(err)
        reject(err)
      } else {
        resolve(row)
      }
    })
  })
}

export const createPost = async (title: string, content: string): Promise<void> => {
  await new Promise<void>((resolve, reject) => {
    db.run(createPostSql, [title, content], (err: Error) => {
      if (err !== null) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

export const updatePost = async (id: number, title: string, content: object): Promise<void> => {
  await new Promise<void>((resolve, reject) => {
    db.run(updatePostSql, [title, content, id], (err) => {
      if (err !== null) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

export const deletePost = async (id: number): Promise<void> => {
  await new Promise<void>((resolve, reject) => {
    db.run(deletePostSql, [id], (err) => {
      if (err !== null) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}
