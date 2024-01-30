import express from 'express'
import PostRoutes from './routes/posts'

const app = express()
app.use(express.json())
app.use('/posts', PostRoutes)
export default app
