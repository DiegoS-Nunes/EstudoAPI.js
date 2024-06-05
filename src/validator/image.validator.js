import { body, param } from 'express-validator'

export const createImageValidator = [
    body('title').isString().withMessage("Título inválido"),
    body('url').isURL().withMessage("Url inválido"),
    body('produtoId').isInt().withMessage("produtoId inválido"),
]
     
export const updateImageValidator = [
    body('descricao').optional().isString().withMessage("Descrição inválido"),
    body('preco').optional().isNumeric().withMessage("Preço inválido"),
]

export const idImageValidator = [
    param("id").isInt().withMessage("Id Inválido")
]