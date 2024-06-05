import { body, param } from 'express-validator'

export const createUserValidator = [
    body('email').isEmail().withMessage("Email inválido"),
    body('nome').isString().withMessage("Nome inválido"),
    body('idade').isInt().withMessage("Idade inválida"),
]

export const updateUserValidator = [
    body('email').optional().isEmail().withMessage("Email inválido"),
    body('nome').optional().isString().withMessage("Nome inválido"),
    body('idade').optional().isInt().withMessage("Idade inválida"),
]

export const idUserValidator = [
    param("id").isInt().withMessage("Id Inválido")
]