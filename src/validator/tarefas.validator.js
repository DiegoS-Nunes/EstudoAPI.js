import { body, param } from 'express-validator'

export const createTarefasValidator = [
    body('id').isInt().withMessage("id inválido"),
    body('descricao').isString().withMessage("Descrição inválido"),
    body('userId').isInt().withMessage("userId inválido"),
]

export const updateTarefasValidator = [
    body('descricao').optional().isString().withMessage("Descrição inválido"),
    body('userId').optional().isInt().withMessage("userId inválido"),
]

export const idTarefasValidator = [
    param("id").isInt().withMessage("Id Inválido")
]