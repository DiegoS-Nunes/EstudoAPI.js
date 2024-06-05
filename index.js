import { Router } from 'express'
import userRoute from './src/routes/user.route.js'
import produtosRoute from './src/routes/produto.route.js'
import tarefasRoute from './src/routes/tarefas.route.js'
import imageRoute from './src/routes/image.route.js'

const router = Router()

router.use('/users', userRoute)
router.use('/produtos', produtosRoute)
router.use('/tarefas', tarefasRoute)
router.use('/image', imageRoute)

export default router