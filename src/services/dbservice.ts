import db from '../database'
import config from 'config'

const getSql: string = config.get('sql.get')
const getAllSql: string = config.get('sql.getAll')
const putSql: string = config.get('sql.put')
const postSql: string = config.get('sql.post')
const deleteSql: string = config.get('sql.delete')

export const getPosts = async (): Promise<any[]> => {
  return await new Promise<any[]>((resolve, reject) => {
    db.all(getAllSql, [], (err: Error, rows: any[]) => {
      if (err != null) {
        reject(err)
      } else {
        resolve(rows)
      }
    })
  })
}

export const getPost = async (id: number): Promise<any> => {
  return await new Promise<any>((resolve, reject) => {
    db.get(getSql, [id], (err: Error, row: any) => {
      if (err !== null) {
        console.log(err)
        reject(err)
      } else {
        resolve(row)
      }
    })
  })
}

export const createPost = async (title: string, content: object): Promise<void> => {
  await new Promise<void>((resolve, reject) => {
    db.run(postSql, [title, content], (err: Error) => {
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
    db.run(putSql, [title, content, id], (err) => {
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
    db.run(deleteSql, [id], (err) => {
      if (err !== null) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}
