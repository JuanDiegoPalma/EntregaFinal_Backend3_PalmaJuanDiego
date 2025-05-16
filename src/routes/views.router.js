import { Router } from 'express'
import { ViewsController } from '../controllers/views.controller.js'

const router = Router()

const {
    home,
    login,
    register
 }  = new ViewsController()
router.get('/', home)
router.get('/login', login)
router.get('/register', register)

export { router as viewsRouter }