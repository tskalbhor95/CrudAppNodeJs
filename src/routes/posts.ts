import express from 'express'
import PostController from '../controllers/PostController'

const router = express.Router()
const postCtrlInstance = new PostController()

router.get('/', (req, res) => { void postCtrlInstance.getPosts(req, res) })

router.post('/', (req, res) => { void postCtrlInstance.createPost(req, res) })

router.put('/:id', (req, res) => { void postCtrlInstance.updatePost(req, res) })
router.get('/:id', (req, res) => { void postCtrlInstance.getPost(req, res) })

router.delete('/:id', (req, res) => { void postCtrlInstance.deletePost(req, res) })
export default router
