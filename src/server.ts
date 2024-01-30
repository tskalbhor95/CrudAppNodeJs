import app from './app'

const HTTP_PORT = 8080

app.listen(HTTP_PORT, () => {
  console.log(`Server running on port http://localhost:${HTTP_PORT}/`)
})
