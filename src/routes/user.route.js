import { Router } from 'express'
import { createUserValidator, idUserValidator, updateUserValidator } from '../validator/user.validator.js'
import UserController from '../controllers/user.controller.js'

const router = Router()

router.get('/', UserController.getAll)
router.post('/', createUserValidator, UserController.create)
router.get('/:id', idUserValidator, UserController.getId)
router.put('/:id', [idUserValidator, updateUserValidator], UserController.update)
router.delete('/:id', idUserValidator, UserController.delete)

export default router