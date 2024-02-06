import express from 'express'
import swaggerUi, { type JsonObject } from 'swagger-ui-express'
import * as yaml from 'js-yaml'
import cors from 'cors'
import * as fs from 'fs'
import postRoutes from './routes/posts'

const app = express()
app.use(express.json())

// Use cors middleware
app.use(cors())
try {
  const fileContents = fs.readFileSync('./swagger.yaml', 'utf8')
  const data = yaml.load(fileContents) as JsonObject

  // Serve Swagger documentation
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(data))
} catch (e) {
  console.error(e)
}

app.use('/posts', postRoutes)

export default app
