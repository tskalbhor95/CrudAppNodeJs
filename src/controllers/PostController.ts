import httpStatus from 'http-status-codes'
import { type Request, type Response } from 'express'
import { getPosts, createPost, updatePost, deletePost, getPost } from '../services/dbservice'

class PostController {
  async getPosts (req: Request, res: Response): Promise<void> {
    try {
      const posts: any[] = await getPosts()
      res.status(httpStatus.OK).json({
        message: 'Posts retrieved successfully',
        data: posts
      })
    } catch (err: any) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: err.message })
    }
  }

  async getPost (req: Request, res: Response): Promise<void> {
    const postId: number = Number(req.params.id)
    try {
      const post: any = await getPost(postId)
      post === undefined
        ? res.status(httpStatus.NOT_FOUND).json({ message: 'Post Not Found' })
        : res.status(httpStatus.OK).json({ message: 'Posts retrieved successfully', data: post })
    } catch (err: any) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: err.message })
    }
  }

  async createPost (req: Request, res: Response): Promise<void> {
    const { title, content } = req.body as { title: string, content: object }
    try {
      await createPost(title, content)
      res.status(httpStatus.CREATED).json({ message: 'Post created successfully' })
    } catch (err: any) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: err.message })
    }
  }

  async updatePost (req: Request, res: Response): Promise<void> {
    const postId: number = Number(req.params.id)
    const { title, content } = req.body as { title: string, content: object }

    try {
      const post = await getPost(postId)
      if (post === undefined) {
        res.status(httpStatus.NOT_FOUND).json({
          error: 'Post not found'
        })
      } else {
        await updatePost(postId, title, content)
        res.status(httpStatus.OK).json({
          message: 'post successfully updated'
        })
      }
    } catch (err: any) {
      err.code === 'SQLITE_CONSTRAINT'
        ? res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: err.message })
        : res.status(httpStatus.NO_CONTENT).json({ error: err.message })
    }
  }

  async deletePost (req: Request, res: Response): Promise<void> {
    const postId: number = Number(req.params.id)
    try {
      await deletePost(postId)
      res.status(httpStatus.NO_CONTENT).json({
        message: 'post deleted successfully'
      })
    } catch (err: any) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: err.message })
    }
  }
}

export default PostController
