import sqlite3 from 'sqlite3'
const sql = sqlite3.verbose()
const DB_SOURCE = 'db.sqlite'

const db = new sql.Database(DB_SOURCE, (err: any) => {
  if (err !== null) {
    // cannot open database
    console.error(err.message)
    throw err
  } else {
    console.log('Connected to Database')
    const sql: string = 'CREATE TABLE IF NOT EXISTS post(id INTEGER PRIMARY KEY AUTOINCREMENT,title text UNIQUE ,content text,CONSTRAINT title_unique UNIQUE (title)) '
    db.run(sql, (err) => {
      if (err !== null) {
        console.log(err.message)
      } else {
        console.log('SuccessFully Created Table post')
      }
    })
  }
})
export default db
