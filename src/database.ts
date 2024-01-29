import sqlite3 from 'sqlite3'
const sql = sqlite3.verbose()
const DB_SOURCE = 'db.sqlite'

export const db = new sql.Database(DB_SOURCE, (err) => {
  if (err !== null) {
    // cannot open database
    console.error(err.message)
    throw err
  } else {
    console.log('Connected to Database')
    db.run(`CREATE TABLE IF NOT EXISTS post (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title text UNIQUE ,
        content text,
        CONSTRAINT title_unique UNIQUE (title)
                )`, (err) => {
      if (err !== null) {
        console.log(err.message)
      } else {
        const insert = 'INSERT INTO post (title, content) VALUES  (?, ?)'
        db.run(insert, ['Post', 'content'])
        db.run(insert, ['Another Post', 'content'])
        db.run(insert, ['Tushar', 'kalbhor'])
      }
    })
  }
})
