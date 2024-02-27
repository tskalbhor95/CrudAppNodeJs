import app from './app'

const HTTP_PORT: number = 8080

app.listen(HTTP_PORT, (): void => {
  console.log(`Server running on port http://localhost:${HTTP_PORT}/`)
})
